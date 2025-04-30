import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { MovieProvider } from "../contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <main className="bg-gray-600 text-white min-h-screen pb-3 pt-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
