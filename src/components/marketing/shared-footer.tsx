import Link from "next/link";
import { appLoginUrl } from "@/lib/site";

export function SharedFooter() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-[#f0eeec] px-6 pb-10 pt-6 md:px-[82px] sm:flex-row sm:items-center">
      <Link
        href="/"
        className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] font-bold text-[#1b1c1c]"
      >
        Complete Coach
      </Link>
      <div className="flex flex-wrap gap-6 text-[12px] text-[#787586]">
        <Link href="/features" className="transition-colors hover:text-[#1b1c1c]">
          Features
        </Link>
        <Link href="/pricing" className="transition-colors hover:text-[#1b1c1c]">
          Pricing
        </Link>
        <Link href="/roadmap" className="transition-colors hover:text-[#1b1c1c]">
          Roadmap
        </Link>
        <a href={appLoginUrl} className="transition-colors hover:text-[#1b1c1c]">
          Login
        </a>
      </div>
    </footer>
  );
}
