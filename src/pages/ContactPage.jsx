import Navbar from "../components/navbar";
import "./ContactPage.css";
import xIcon from "../assets/images/x.svg";
import facebookIcon from "../assets/images/facebook.svg";
import linkedIcon from "../assets/images/linkedin.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import ButtonComp from "../components/button";
import { useState } from "react";
import { toast } from "react-toastify";
import usePost from "../hooks/usePost";

function ContactPage() {
  const [postDataInput, setPostDataInput] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });
  const baseUrl = "https://backend.getlinked.ai";
  const endpoint = "/hackathon/contact-form";
  const { error, postData, posting } = usePost();
  const [postResponseData, setPostResponseData] = useState(null);
  const [missingError, setMissingError] = useState("");
  const inputChange = (event) => {
    setPostDataInput({
      ...postDataInput,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(postDataInput);
    const fieldNamesMapping = {
      email: "Email",

      phone_number: "Phone Number",
      first_name: "First Name",
      message: "message",
    };
    const requiredFields = ["email", "phone_number", "first_name", "message"];
    const missingFields = requiredFields.filter(
      (field) => !postDataInput[field]
    );
    const missingFieldNames = missingFields.map(
      (field) => fieldNamesMapping[field]
    );

    if (missingFields.length > 0) {
      const errorMessage = `Please fill out the following fields: ${missingFieldNames.join(
        ", "
      )}`;
      setMissingError(errorMessage);
      setTimeout(() => {
        setMissingError("");
      }, 4000);
      return;
    }
    try {
      const response = await postData(baseUrl + endpoint, postDataInput);

      setPostResponseData(response);
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log(postResponseData);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  if (error) {
    return <div style={{ color: "white" }}>Error: {error.message}</div>;
  }
  return (
    <div className="contactPage">
      <Navbar />
      <main>
        <div className="main_wrapper">
          <div className="left_main">
            <h2 className="header">Get in touch</h2>
            <p className="contact_details">
              <div>
                Contact
                <br />
                Information
              </div>
              <br />
              <div>
                27,Alara Street
                <br /> Yaba 100012 <br />
                Lagos State
              </div>
              <br />
              <div>Call Us : 07067981819</div>
              <br />
              <div>
                we are open from Monday-Friday
                <br /> 08:00am - 05:00pm
              </div>
              <br />
            </p>
            <div className="socials">
              <p>Share on</p>
              <div className="social_icons">
                <img
                  className="social_icon"
                  src={InstagramIcon}
                  alt="insta-icon"
                />
                <img className="social_icon" src={xIcon} alt="x-icon" />
                <img
                  className="social_icon"
                  src={facebookIcon}
                  alt="face-icon"
                />
                <img
                  className="social_icon"
                  src={linkedIcon}
                  alt="linked-icon"
                />
              </div>
            </div>
          </div>
          <div className="right_main">
            <form className="container" onSubmit={handleFormSubmit}>
              <div className="right_header">
                <p>Questions or need assistance?</p>
                <p>Let us know about it!</p>
              </div>
              <p
                style={{
                  textAlign: "center",
                  color: "green",
                  marginBottom: "15px",
                }}
              >
                {missingError}
              </p>
              <div className="input">
                <input
                  name="first_name"
                  type="text"
                  value={postDataInput.first_name}
                  onChange={inputChange}
                  placeholder="First Name"
                />
              </div>
              <div className="input">
                <input
                  name="email"
                  value={postDataInput.email}
                  onChange={inputChange}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input">
                <input
                  name="phone_number"
                  value={postDataInput.phone_number}
                  onChange={inputChange}
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="input">
                <textarea
                  name="message"
                  value={postDataInput.message}
                  onChange={inputChange}
                  rows="4"
                  cols="50"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="submit_btn">
                <ButtonComp text={posting ? "Loading" : "Submit"} />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ContactPage;
