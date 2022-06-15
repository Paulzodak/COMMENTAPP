import "./addcomment.css";
import { useState } from "react";
import current_user from "../../images/avatars/image-juliusomo.png";
function Addcomment({ setUserInput }) {
  let id2 = 4;
  const userInputHandler = (event) => {
    id2 = id2 + 1;
    const userinput = event.target.value;
    console.log(userinput);
    setUserInput({
      id: id2,
      content: userinput,
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "anonymous",
          webp: "amyrobsonwebp",
        },
        username: "anonymous",
      },
      replies: [],
    });
  };
  // const userInputSend = () => {
  //   setUserInput(userinput);
  // };
  return (
    <div>
      <input className="comment_input" onChange={userInputHandler}></input>
      <div className="send_container">
        <img src={current_user}></img>
        <div></div>
        <button>SEND</button>
      </div>
    </div>
  );
}
export default Addcomment;
