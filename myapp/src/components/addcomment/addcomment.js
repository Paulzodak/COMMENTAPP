import "./addcomment.css";
import current_user from "../../images/avatars/image-juliusomo.png";
function Addcomment() {
  return (
    <div>
      <input className="comment_input"></input>
      <div className="send_container">
        <img src={current_user}></img>
        <div></div>
        <button>SEND</button>
      </div>
    </div>
  );
}
export default Addcomment;
