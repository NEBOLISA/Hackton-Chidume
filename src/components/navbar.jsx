import { Link, useNavigate } from "react-router-dom";
import ButtonComp from "./button";
import "./navbar.css";
import backArrow from "../assets/images/vector11.svg";
import vector12 from "../assets/images/Vector12.svg";
function Navbar({ page, openNav }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="nav_header">
      <div className="nav_header_wrapper">
        <img
          onClick={handleGoBack}
          className={page === "home" ? "none" : "back"}
          src={backArrow}
          alt="back_btn"
        />

        <div className="header_wrapper">
          <h2 className={page === "home" ? "header_text_home" : "header_text"}>
            <Link className="link" to="/">
              <span style={{ color: "white" }}> get</span> <span>linked</span>
            </Link>
          </h2>
          <nav>
            <ul>
              <li onClick={() => handleScrollToSection("timeline")}>
                Timeline
              </li>
              <li onClick={() => handleScrollToSection("overview")}>
                Overview
              </li>
              <li onClick={() => handleScrollToSection("faqs")}>FAQs</li>
              <li className="gradient_text">
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link className="btn_link" to="/register">
              {page === "register" ? (
                <ButtonComp text="Register" className="register" />
              ) : (
                <ButtonComp text="Register" />
              )}
            </Link>
            <img
              onClick={openNav}
              className={page === "home" ? "show" : "none"}
              src={vector12}
              alt="vector12"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
