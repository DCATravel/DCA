import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LoginButton from "./LoginButton";
import ThemeToggle from "./ThemeToggle"; 

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Explora", path: "/explora" },
    { name: "Itinerarios", path: "/itinerarios" },
    { name: "Material", path: "/material" },
  ];

  return (
    <nav className="w-full bg-background shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-105">
          <img 
            src="/assets/logo.png" 
            alt="DCA Travel" 
            className="h-12 w-12 sm:h-16 sm:w-16 object-contain" 
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-foreground underline underline-offset-4"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side: Theme + Login + Mobile menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          <ThemeToggle />

          <LoginButton />

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-background border-t px-4 py-3 space-y-2 shadow-inner">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-medium py-3 px-2 rounded-md transition-colors hover:bg-accent hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary bg-accent font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}