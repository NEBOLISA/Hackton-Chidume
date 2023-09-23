import "./button.css";
function ButtonComp({ text, className }) {
  return (
    <button className={className === "register" ? "register_btn btn" : "btn"}>
      {text}
    </button>
  );
}
export default ButtonComp;
