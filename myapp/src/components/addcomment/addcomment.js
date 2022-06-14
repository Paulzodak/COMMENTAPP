import "./addcomment.css";
import { useState } from "react";
import current_user from "../../images/avatars/image-juliusomo.png";
function Addcomment({ setUserInput }) {
  const userInputHandler = (event) => {
    const userinput = event.target.value;
    console.log(userinput);
    setUserInput({
      id: 1,
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
  const userInputSend = () => {
    // setUserInput(userinput);
  };
  return (
    <div>
      <input className="comment_input" onChange={userInputHandler}></input>
      <div className="send_container">
        <img src={current_user}></img>
        <div></div>
        <button onClick={userInputHandler}>SEND</button>
      </div>
    </div>
  );
}
export default Addcomment;
