import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="h-14 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4 md:px-6">
      {/* Left section - Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-white"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <span className="text-white font-semibold text-lg">LawGPT</span>
      </div>

      {/* Center section - Navigation (hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-8">
        <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
          Consult
        </button>
        <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
          Resources
        </button>
        <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
          Pricing
        </button>
      </nav>

      {/* Right section - User menu */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-gray-700 w-8 h-8"
        >
          <User className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
