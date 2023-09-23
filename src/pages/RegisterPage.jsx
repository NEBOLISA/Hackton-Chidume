import Navbar from "../components/navbar";
import "./RegisterPage.css";
import registerImage from "../assets/images/registerImage.svg";
import walking1 from "../assets/images/walking1.svg";
import walking2 from "../assets/images/walking2.svg";
import { useState } from "react";

import RegisterSuccessPage from "../components/registerSuccess";

import useApi from "../hooks/useApi";

function RegisterPage() {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const baseUrl = "https://backend.getlinked.ai";
  const endpoint = "/hackathon/registration";

  const { data, loading, error, postData, posting } = useApi(
    "https://backend.getlinked.ai/hackathon/categories-list"
  );
  const [postDataInput, setPostDataInput] = useState({
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    privacy_poclicy_accepted: false,
    category: "",
    group_size: "",
  });
  const [postResponseData, setPostResponseData] = useState(null);
  const [missingError, setMissingError] = useState("");

  const closeSuccessDialog = () => {
    setShowSuccessDialog(false);
  };
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
      team_name: "Team Name",
      email: "Email",
      category: "Category",
      phone_number: "Phone Number",
      project_topic: "Project Topic",
      group_size: "Group Size",
    };
    const requiredFields = [
      "team_name",
      "email",
      "category",
      "phone_number",
      "project_topic",
      "group_size",
    ];
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
      setShowSuccessDialog(true);
      console.log(postResponseData);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };
  if (loading) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "white" }}>Error: {error.message}</div>;
  }

  return (
    <div className="register">
      <div className="nav_wrapper">
        <Navbar page="register" />
      </div>
      <main>
        <div className="main_wrapper">
          <div className="left_main">
            <h2 className="reg_header1">Register</h2>
            <img
              className="section_img"
              src={registerImage}
              alt="registerImage"
            />
          </div>
          <div className="right_main">
            <form className="container" onSubmit={handleFormSubmit}>
              <h2 className="reg_header">Register</h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ margin: "0", alignSelf: "end" }}>
                  Be part of this movement!
                </p>
                <div
                  style={{
                    width: "30%",
                    borderBottom: "1px dashed #D434FE",
                    marginBottom: "8px",
                    marginLeft: "4px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={walking1} alt="walking1" />
                    <img src={walking2} alt="walking2" />
                  </div>
                </div>
              </div>
              <h3 style={{ color: "white", textTransform: "uppercase" }}>
                Create Your Account
              </h3>
              {
                <p style={{ textAlign: "center", color: "green" }}>
                  {missingError}
                </p>
              }

              <div className="inputs_div">
                <div className="left_input">
                  <label className="label">Team's Name</label>
                  <div className="input">
                    <input
                      value={postDataInput.team_name}
                      onChange={inputChange}
                      name="team_name"
                      type="text"
                      placeholder="Enter the name of your group"
                    />
                  </div>
                  <label className="label">Email</label>
                  <div className="input">
                    <input
                      value={postDataInput.email}
                      onChange={inputChange}
                      name="email"
                      type="text"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <label className="label">Category</label>
                  <div className="input">
                    <select
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        color: "white",
                        outline: "none",
                      }}
                      name="category"
                      value={postDataInput.category}
                      onChange={inputChange}
                    >
                      <option disabled selected value="">
                        Select your category
                      </option>
                      {data.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="right_input">
                  <label className="label">Phone</label>
                  <div className="input">
                    <input
                      value={postDataInput.phone_number}
                      onChange={inputChange}
                      name="phone_number"
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <label className="label">Project Topic</label>
                  <div className="input">
                    <input
                      type="text"
                      value={postDataInput.project_topic}
                      onChange={inputChange}
                      name="project_topic"
                      placeholder="What is your project topic"
                    />
                  </div>
                  <label className="label">Group size</label>
                  <div className="input">
                    <select
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        color: "white",
                        outline: "none",
                      }}
                      name="group_size"
                      value={postDataInput.group_size}
                      onChange={inputChange}
                    >
                      <option disabled selected value="">
                        Select
                      </option>
                      {[1, 2, 3, 4].map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: " #FF26B9",
                  fontWeight: "700",
                  fontSize: "12px",
                }}
              >
                Please review your registration details before submitting
              </p>
              <div className="agreement_div">
                <input
                  checked={postDataInput.privacy_poclicy_accepted}
                  onChange={inputChange}
                  name="privacy_poclicy_accepted"
                  className="check_btn"
                  type="checkbox"
                />
                <span
                  style={{
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  I agreed with the event terms and conditions and privacy
                  policy
                </span>
              </div>
              <div className="btn_wrapper">
                <button className="btn">
                  {posting ? "Loading..." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      {showSuccessDialog && (
        <RegisterSuccessPage onClose={closeSuccessDialog} />
      )}
    </div>
  );
}
export default RegisterPage;
