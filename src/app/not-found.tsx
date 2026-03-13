import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1440px] max-[1460px]:max-w-[95%] mx-auto py-[100px] pt-[230px] max-[1000px]:pt-[180px] text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-primary text-[80px] max-[800px]:text-[60px] font-bold mb-[10px]">
        404
      </h1>
      <h2 className="text-primary text-[30px] max-[800px]:text-[22px] mb-[20px]">
        Page Not Found
      </h2>
      <p className="text-gray-text text-[18px] mb-[30px]">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-primary text-white py-[12px] px-[30px] rounded-[10px] no-underline text-[16px] hover:opacity-90 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  );
}
