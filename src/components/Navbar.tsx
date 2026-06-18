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
    { name: "Nosotros", path: "/nosotros" },
    { name: "Explora", path: "/explora" },
    { name: "Itinerarios", path: "/itinerarios" },
    { name: "Turitours", path: "/turitours" },
    { name: "Material", path: "/material" },
  ];

  return (
    <nav
      className="
        w-full sticky top-0 z-50
        bg-background/90 backdrop-blur-xl
        border-b border-border/40
        shadow-sm
      "
    >
      <div
        className="
          w-full max-w-[1480px] mx-auto
          px-5 sm:px-8 lg:px-12 xl:px-16
          flex items-center justify-between
          h-20 lg:h-24
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center flex-shrink-0 transition-transform hover:scale-105"
          aria-label="Ir al inicio"
        >
          <img
            src="/assets/logo.png"
            alt="DCA Travel"
            className="
              h-14 w-14
              sm:h-16 sm:w-16
              lg:h-[72px] lg:w-[72px]
              object-contain
            "
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative text-[15px] lg:text-base font-semibold
                  transition-colors hover:text-primary
                  py-2
                  ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }
                `}
              >
                {link.name}

                <span
                  className={`
                    absolute left-0 -bottom-0.5 h-0.5 rounded-full
                    bg-secondary transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 lg:gap-4">
          <ThemeToggle />

          <div className="hidden sm:block">
            <LoginButton />
          </div>

          {/* Mobile menu button */}
          <button
            className="
              md:hidden p-2.5 rounded-xl
              text-muted-foreground hover:text-foreground
              hover:bg-muted/60 transition-colors
            "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden
            bg-background/95 backdrop-blur-xl
            border-t border-border/50
            px-5 sm:px-8 py-4
            space-y-2 shadow-inner
          "
        >
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  block text-base font-semibold
                  py-3 px-3 rounded-xl
                  transition-colors
                  hover:bg-muted/70 hover:text-primary
                  ${
                    isActive
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 sm:hidden">
            <LoginButton />
          </div>
        </div>
      )}
    </nav>
  );
}
