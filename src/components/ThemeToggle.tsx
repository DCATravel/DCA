import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // 1. Inicialización perezosa: Calculamos el tema correcto DESDE EL INICIO
  const [isDark, setIsDark] = useState(() => {
    // Verificamos si estamos en el navegador para evitar errores en SSR
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return savedTheme === "dark" || (!savedTheme && prefersDark);
    }
    return false;
  });

  // 2. Este useEffect SOLO se encarga de modificar el DOM de HTML cuando isDark cambia
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      // 3. El botón ahora solo invierte el estado
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Alternar modo oscuro"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-500 hover:text-amber-600 transition-colors" />
      ) : (
        <Moon className="w-5 h-5 transition-colors" />
      )}
    </button>
  );
}