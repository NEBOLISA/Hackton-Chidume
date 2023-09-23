import "./phoneNav.css";
import closebtn from "../assets/images/vector17.svg";
import { Link } from "react-router-dom";
import ButtonComp from "./button";
function PhoneNav({ navOpen, closeNav }) {
  return (
    <div className={navOpen ? "phoneNav showNav" : "hideNav"}>
      <div className="close_btn">
        <img src={closebtn} onClick={closeNav} alt="closebtn" />
      </div>
      <nav>
        <ul>
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <Link className="link" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <Link to="/register">
          <ButtonComp text="Register" />
        </Link>
      </nav>
    </div>
  );
}
export default PhoneNav;
