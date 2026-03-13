import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link
      href="/booking"
      className="bg-[#00273f] text-white rounded-full border-none fixed bottom-[50px] left-[50px] z-[100] px-[30px] py-[15px] text-[17px] shadow-md cursor-pointer no-underline hover:opacity-90 transition-opacity max-[767px]:left-auto max-[767px]:right-5 max-[767px]:bottom-5 max-[767px]:px-5 max-[767px]:py-3 max-[767px]:text-[13px]"
    >
      Book Free Assessment
    </Link>
  );
}
