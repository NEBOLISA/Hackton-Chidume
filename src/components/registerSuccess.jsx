import "./registerSuccess.css";
import registerIcon from "../assets/images/congratulation.svg";
function RegisterSuccessPage({ onClose }) {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="registerSuccess">
        <div className="successWrapper">
          <div className="success_icon_wrapper">
            <img
              className="success_icon"
              src={registerIcon}
              alt="successIcon"
            />
          </div>
          <h3>Congratulations you have successfully Registered!</h3>
          <p>
            Yes, it was easy and you did it! check your mail box for next step
          </p>
          <div className="register_btn">
            <button onClick={onClose} className="btn">
              back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterSuccessPage;
