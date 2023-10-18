import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ButtonComp from "./button";
import "./navbar.css";
import backArrow from "../assets/images/vector11.svg";
import vector12 from "../assets/images/Vector12.svg";
function Navbar({ page, openNav }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  // const handleScrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

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
          <h2 className={page === "home" ? "header_text" : "header_text"}>
            <Link className="link" to="/">
              <span style={{ color: "white" }}> get</span> <span>linked</span>
            </Link>
          </h2>
          <nav>
            <ul>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="timeline"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="normal_link"
                >
                  Timeline
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="overview"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="normal_link"
                >
                  Overview
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="faqs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="normal_link"
                >
                  FAQs
                </ScrollLink>
              </li>
              <li className="gradient_text">
                <Link
                  className={page === "home" ? "normal_link" : "link"}
                  to="/contact"
                >
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
