"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[100px] pt-[230px] max-[1000px]:pt-[180px] text-center">
      <h1 className="text-primary text-[50px] max-[800px]:text-[35px] mb-[20px]">
        Search Results
      </h1>
      {query ? (
        <p className="text-gray-text text-[20px]">
          Search results for: <strong>&quot;{query}&quot;</strong>
        </p>
      ) : (
        <p className="text-gray-text text-[20px]">
          Please enter a search query.
        </p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-[1440px] mx-auto py-[100px] pt-[230px] text-center">
          <p>Loading...</p>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
