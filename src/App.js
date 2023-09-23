import "./App.css";
import ContactPage from "./pages/ContactPage";
import lensFlare from "./assets/images/lensflare.svg";
import RegisterPage from "./pages/RegisterPage";
import star from "./assets/images/star.svg";
import star2 from "./assets/images/star2.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <img className="leftflare flare" src={lensFlare} alt="lensflare" />
      <img className="container_star" src={star} alt="star" />
      <img className="star2" src={star2} alt="star" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
