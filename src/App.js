import TentangKami from "./pages/TentangKami";
import Home from "./pages/Home";
import Panduan from "./pages/Panduan";
import Artikel from "./pages/Artikel";
import { Routes, Route } from "react-router-dom";
import { HOME, ABOUT, PANDUAN, ARTIKEL } from "./router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<TentangKami />} />
        <Route path={PANDUAN} element={<Panduan />} />
        <Route path={ARTIKEL} element={<Artikel />} />
      </Routes>
    </>
  );
};

export default App;
