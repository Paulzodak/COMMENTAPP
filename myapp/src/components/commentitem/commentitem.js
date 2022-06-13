import "./commentitem.css";
import data from "../../data.json";
import amyrobson from "../../images/avatars/image-amyrobson.png";
import plus_btn from "../../images/icon-plus.svg";
import minus_btn from "../../images/icon-minus.svg";
import reply_btn from "../../images/icon-reply.svg";
function Commentitem() {
  return (
    <div>
      <div className="box1">
        <img className="Profile_image" src={amyrobson}></img>
        <p className="name">amyrobsonn</p>
        <p className="Date"> 1 Month Ago</p>
      </div>
      <div className="box2">
        "Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well."
      </div>
      <div className="box3">
        {/* ---UTILITY BTNS --- */}
        <div className="utility_btns">
          <div className="plus">
            <img src={plus_btn} />
          </div>
          <div className="number"> 12</div>
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
