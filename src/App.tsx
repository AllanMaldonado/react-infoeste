import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/corpo-docente" element={<></>} />
          <Route path="/contato" element={<></>} />
          <Route path="/contact" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
