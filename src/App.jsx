import Home from "./pages/Home"
import ServiceDetails from "./pages/ServiceDetails";
import ServicePage from "./pages/ServicePage"
import {Routes, Route } from "react-router-dom";

function App() {

  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        {/* Dynamic route with :id */}
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
      </Routes>
   
  )
}

export default App
