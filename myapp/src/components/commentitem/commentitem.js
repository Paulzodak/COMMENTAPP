// ---------{IMPORTS}----------
import "./commentitem.css";

// --------BTNS---------------
import plus_btn from "../../images/icon-plus.svg";
import minus_btn from "../../images/icon-minus.svg";
import reply_btn from "../../images/icon-reply.svg";

// ---------{COMPONENT}---------------
function Commentitem(props) {
  return (
    <div>
      <div className="box1">
        <img className="Profile_image" src={props.picturesrc.png}></img>
        <p className="name">{props.username}</p>
        <p className="Date">{props.date}</p>
      </div>
      <div className="box2">{props.message}</div>
      <div className="box3">
        {/* ---UTILITY BTNS --- */}
        <div className="utility_btns">
          <div className="plus">
            <img src={plus_btn} />
          </div>
          <div className="number">{props.score}</div>
          <div className="minus">
            <img src={minus_btn} />
          </div>
        </div>
        <div></div>
        {/* ----REPLY BTNS */}
        <div className="reply_btn">
          <img src={reply_btn}></img>
          <span>Reply</span>
        </div>
      </div>
    </div>
  );
}
export default Commentitem;
