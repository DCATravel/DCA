import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop"; 
import Index from "@/pages/Index";
import Explore from "@/pages/Explore";
import Itineraries from "@/pages/Itineraries";
import ItineraryDetail from "@/pages/ItineraryDetail";
import Material from "@/pages/Material";
import DestinationItineraries from "./pages/DestinationItineraries";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/explora" element={<Explore />} />
        <Route path="/itinerarios" element={<Itineraries />} />
        <Route path="/destinos/:id" element={<DestinationItineraries />} />
        <Route path="/itinerarios/:id" element={<ItineraryDetail />} />
        <Route path="/material" element={<Material />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;