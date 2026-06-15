import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "@/components/ScrollToTop"; 
import Index from "@/pages/Index";
import Explore from "@/pages/Explore";
import Itineraries from "@/pages/Itineraries";
import ItineraryDetail from "@/pages/ItineraryDetail";
import Material from "@/pages/Material";
import DestinationItineraries from "./pages/DestinationItineraries";
import Turitours from './pages/Turitours';
import Contact from "@/pages/Contact";
import Agency from "@/pages/Agency";
import Nosotros from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SpeedInsights />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/explora" element={<Explore />} />
        <Route path="/itinerarios" element={<Itineraries />} />
        <Route path="/destinos/:id" element={<DestinationItineraries />} />
        <Route path="/itinerarios/:id" element={<ItineraryDetail />} />
        <Route path="/material" element={<Material />} />
        <Route path="/turitours" element={<Turitours />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/agencias" element={<Agency />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
