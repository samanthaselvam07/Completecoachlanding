"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  appUrl,
  founderProgramCta,
  founderProgramPath,
  navLinks,
} from "@/lib/site";

interface SharedNavProps {
  dark?: boolean;
}

export function SharedNav({ dark = false }: SharedNavProps) {
  const pathname = usePathname();

  const linkBase = dark
    ? "font-medium text-white/80 hover:text-white transition-colors text-[14px]"
    : "font-medium text-[#1b1c1c] hover:text-[#4f40cf] transition-colors text-[14px]";

  const activeClass = dark
    ? "font-semibold text-white"
    : "font-semibold text-[#4f40cf]";

  return (
    <nav
      className="sticky top-0 z-50 flex h-[90px] w-full items-center justify-between px-6 backdrop-blur-sm md:px-[72px]"
      style={{
        background: dark ? "rgba(79,64,207,0.95)" : "rgba(251,249,248,0.95)",
      }}
    >
      <Link
        href="/"
        className={`flex items-center gap-3 font-['Plus_Jakarta_Sans',sans-serif] text-[26px] font-bold md:text-[30px] ${
          dark ? "text-white" : "text-[#1b1c1c]"
        }`}
      >
        <img
          alt=""
          className="size-10 rounded-[10px]"
          height="40"
          src="/brand/logo.svg"
          width="40"
        />
        <span>Complete Coach</span>
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? activeClass : linkBase}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          className={`hidden text-[14px] transition-colors md:block ${
            dark
              ? "text-white/80 hover:text-white"
              : "text-[#1b1c1c] hover:text-[#4f40cf]"
          }`}
          href={appUrl}
        >
          Login
        </a>
        <Link
          href={founderProgramPath}
          className="whitespace-nowrap rounded-[34px] bg-[#4f40cf] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0px_10px_20px_0px_rgba(79,64,207,0.16)] transition-colors hover:bg-[#3d31a8] md:text-[14px]"
        >
          {founderProgramCta}
        </Link>
      </div>
    </nav>
  );
}
