import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Index from "@/pages/Index";
import Explore from "@/pages/Explore";
import Itineraries from "@/pages/Itineraries";
import ItineraryDetail from "@/pages/ItineraryDetail";
import Material from "@/pages/Material";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/explora" element={<Explore />} />
        <Route path="/itinerarios" element={<Itineraries />} />
        <Route path="/itinerarios/:id" element={<ItineraryDetail />} />
        <Route path="/material" element={<Material />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;