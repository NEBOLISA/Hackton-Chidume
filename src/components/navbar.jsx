import { Link, useNavigate } from "react-router-dom";
import ButtonComp from "./button";
import "./navbar.css";
import backArrow from "../assets/images/vector11.svg";

function Navbar({ page }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <header className="header">
      <img
        onClick={handleGoBack}
        className={page === "home" ? "none" : "back"}
        src={backArrow}
        alt="back_btn"
      />

      <div className="header_wrapper">
        <h2 className="header_text">
          <Link className="link" to="/">
            <span style={{ color: "white" }}> get</span> <span>linked</span>
          </Link>
        </h2>
        <nav>
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li className="gradient_text">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/register">
            {page === "register" ? (
              <ButtonComp text="Register" className="register" />
            ) : (
              <ButtonComp text="Register" />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
