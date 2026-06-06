import { Link, useLocation } from "react-router";

interface SharedNavProps {
  dark?: boolean;
}

export function SharedNav({ dark = false }: SharedNavProps) {
  const { pathname } = useLocation();

  const linkBase = dark
    ? "font-medium text-white/80 hover:text-white transition-colors text-[14px]"
    : "font-medium text-[#1b1c1c] hover:text-[#4f40cf] transition-colors text-[14px]";

  const activeClass = dark ? "font-semibold text-white" : "font-semibold text-[#4f40cf]";

  return (
    <nav className="w-full px-6 md:px-[72px] h-[90px] flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm"
      style={{ background: dark ? "rgba(79,64,207,0.95)" : "rgba(251,249,248,0.95)" }}>
      <Link to="/" className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[26px] md:text-[30px] ${dark ? "text-white" : "text-[#1b1c1c]"}`}>
        Complete Coach
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link to="/features" className={pathname === "/features" ? activeClass : linkBase}>Features</Link>
        <Link to="/pricing" className={pathname === "/pricing" ? activeClass : linkBase}>Pricing</Link>
        <Link to="/roadmap" className={pathname === "/roadmap" ? activeClass : linkBase}>Roadmap</Link>
      </div>
      <div className="flex items-center gap-4">
        <span className={`hidden md:block text-[14px] cursor-default ${dark ? "text-white/80" : "text-[#1b1c1c]"}`}>Login</span>
        <Link
          to="/pricing"
          className="bg-[#4f40cf] text-white font-semibold px-5 py-2.5 rounded-[34px] shadow-[0px_10px_20px_0px_rgba(79,64,207,0.16)] hover:bg-[#3d31a8] transition-colors text-[13px] md:text-[14px] whitespace-nowrap"
        >
          Start Free Trial
        </Link>
      </div>
    </nav>
  );
}
