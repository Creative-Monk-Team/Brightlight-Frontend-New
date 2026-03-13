"use client";

import { useEffect, useState, useMemo } from "react";

interface Draw {
  drawNumber: string;
  drawDateFull: string;
  drawName: string;
  drawSize: string;
  drawCRS: string;
}

type SortKey = "drawNumber" | "drawDateFull" | "drawName" | "drawSize" | "drawCRS";
type SortDir = "asc" | "desc";

const PAGE_SIZE = 30;

export default function PreviousDrawHistoryPage() {
  const [draws, setDraws] = useState<Draw[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>("drawNumber");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json"
    )
      .then((r) => r.json())
      .then((data) => {
        setDraws(data.rounds || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load draw history. Please try again later.");
        setLoading(false);
      });
  }, []);

  const roundTypes = useMemo(() => {
    const names = new Set(draws.map((d) => d.drawName));
    return ["All", ...Array.from(names).sort()];
  }, [draws]);

  const filtered = useMemo(() => {
    return filter === "All" ? draws : draws.filter((d) => d.drawName === filter);
  }, [draws, filter]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let va: string | number = a[sortKey];
      let vb: string | number = b[sortKey];
      if (
        sortKey === "drawNumber" ||
        sortKey === "drawSize" ||
        sortKey === "drawCRS"
      ) {
        va = Number(va) || 0;
        vb = Number(vb) || 0;
      }
      if (va < vb) return sortDir === "asc" ? -1 : 1;
      if (va > vb) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortDir]);

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
    setPage(1);
  };

  const SortIcon = ({ col }: { col: SortKey }) => (
    <span className="ml-1 inline-block text-[10px] opacity-60">
      {sortKey === col ? (sortDir === "asc" ? "▲" : "▼") : "⇅"}
    </span>
  );

  /* Compute visible page numbers (max 7 buttons) */
  const visiblePages = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const half = 3;
    let start = Math.max(1, page - half);
    const end = Math.min(totalPages, start + 6);
    start = Math.max(1, end - 6);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [totalPages, page]);

  return (
    <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[60px] pt-[230px] max-[1000px]:pt-[180px] px-4">
      <h1 className="text-primary text-[50px] max-[800px]:text-[35px] font-bold mb-4">
        Express Entry Draw History
      </h1>
      <p className="text-gray-light text-[18px] mb-10">
        Complete history of Express Entry draws including CRS cutoff scores and
        invitation counts.
      </p>

      {loading && (
        <div className="text-center py-20 text-primary/50 text-[18px]">
          Loading draw history…
        </div>
      )}

      {error && (
        <div className="text-center py-20 text-red-500 text-[18px]">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Filter bar */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <label className="text-[14px] font-semibold text-primary">
              Filter by Round Type:
            </label>
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
              className="border border-primary/20 rounded-lg px-4 py-2 text-[14px] text-primary bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer"
            >
              {roundTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <span className="text-[13px] text-primary/50">
              {sorted.length} draw{sorted.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl shadow-[0_4px_20px_rgba(19,47,70,0.08)]">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-primary text-white">
                  {(
                    [
                      { key: "drawNumber" as SortKey, label: "Draw #" },
                      { key: "drawDateFull" as SortKey, label: "Date" },
                      { key: "drawName" as SortKey, label: "Round Type" },
                      { key: "drawSize" as SortKey, label: "Invitations" },
                      { key: "drawCRS" as SortKey, label: "CRS Cutoff" },
                    ] as { key: SortKey; label: string }[]
                  ).map(({ key, label }) => (
                    <th
                      key={key}
                      onClick={() => handleSort(key)}
                      className="px-5 py-4 text-[13px] font-semibold tracking-wide cursor-pointer hover:bg-white/10 select-none transition-colors duration-150 whitespace-nowrap"
                    >
                      {label}
                      <SortIcon col={key} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginated.map((draw, i) => (
                  <tr
                    key={draw.drawNumber}
                    className={`border-b border-primary/5 hover:bg-primary/[0.03] transition-colors duration-150 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"
                    }`}
                  >
                    <td className="px-5 py-3.5 text-[14px] font-semibold text-primary">
                      #{draw.drawNumber}
                    </td>
                    <td className="px-5 py-3.5 text-[14px] text-[#4a4a4a] whitespace-nowrap">
                      {draw.drawDateFull}
                    </td>
                    <td className="px-5 py-3.5 text-[14px] text-[#4a4a4a]">
                      <span className="bg-gold/10 text-gold text-[12px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                        {draw.drawName}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[14px] text-[#4a4a4a] font-medium">
                      {Number(draw.drawSize).toLocaleString()}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-[16px] font-bold text-primary">
                        {draw.drawCRS}
                      </span>
                    </td>
                  </tr>
                ))}

                {paginated.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-primary/50 text-[14px]"
                    >
                      No draws found for this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg border border-primary/20 text-[14px] text-primary disabled:opacity-30 hover:bg-primary/5 transition-colors duration-150"
              >
                ← Prev
              </button>

              {visiblePages[0] > 1 && (
                <>
                  <button
                    onClick={() => setPage(1)}
                    className="w-9 h-9 rounded-lg text-[14px] border border-primary/20 text-primary hover:bg-primary/5 transition-colors duration-150"
                  >
                    1
                  </button>
                  {visiblePages[0] > 2 && (
                    <span className="text-primary/40 text-[14px] px-1">…</span>
                  )}
                </>
              )}

              {visiblePages.map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-lg text-[14px] transition-colors duration-150 ${
                    page === p
                      ? "bg-primary text-white font-semibold"
                      : "border border-primary/20 text-primary hover:bg-primary/5"
                  }`}
                >
                  {p}
                </button>
              ))}

              {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                  {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                    <span className="text-primary/40 text-[14px] px-1">…</span>
                  )}
                  <button
                    onClick={() => setPage(totalPages)}
                    className="w-9 h-9 rounded-lg text-[14px] border border-primary/20 text-primary hover:bg-primary/5 transition-colors duration-150"
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-lg border border-primary/20 text-[14px] text-primary disabled:opacity-30 hover:bg-primary/5 transition-colors duration-150"
              >
                Next →
              </button>
            </div>
          )}

          <p className="text-center text-[12px] text-primary/30 mt-4">
            Data sourced from Immigration, Refugees and Citizenship Canada (IRCC)
          </p>
        </>
      )}
    </div>
  );
}
