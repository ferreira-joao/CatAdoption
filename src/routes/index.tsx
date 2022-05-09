import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Adoption from "../pages/Adoption";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adoption/:id" element={<Adoption />} />
      </Routes>
    </BrowserRouter>
  );
}
