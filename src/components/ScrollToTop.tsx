import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sube el scroll a la posición X:0, Y:0 de forma instantánea
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no renderiza nada visualmente
  return null;
}