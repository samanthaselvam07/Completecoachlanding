import { Link } from "react-router";

export function SharedFooter() {
  return (
    <footer className="px-6 md:px-[82px] pb-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#f0eeec]">
      <Link to="/" className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1b1c1c] text-[20px]">Coach</Link>
      <div className="flex flex-wrap gap-6 text-[12px] text-[#787586]">
        <a href="#" className="hover:text-[#1b1c1c] transition-colors">About</a>
        <a href="#" className="hover:text-[#1b1c1c] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#1b1c1c] transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-[#1b1c1c] transition-colors">Contact</a>
      </div>
    </footer>
  );
}
