import logo from "./logo.svg";
import { useState } from "react";
import Commentitem from "./components/commentitem/commentitem.js";
import Addcomment from "./components/addcomment/addcomment";
import Card from "./components/commentitem/card";

// -------IMAGES PNGS---------
import anonymous from "./images/anonymous.jpeg";
import amyrobson from "./images/avatars/image-amyrobson.png";
import juliusomo from "./images/avatars/image-juliusomo.png";
import maxblagus from "./images/avatars/image-maxblagun.png";
import ramsesmiron from "./images/avatars/image-ramsesmiron.png";

// --------IMAGES WEBP--------
import amyrobsonwebp from "./images/avatars/image-amyrobson.webp";
import juliusomowebp from "./images/avatars/image-juliusomo.webp";
import maxblaguswebp from "./images/avatars/image-maxblagun.webp";
import ramsesmironwebp from "./images/avatars/image-ramsesmiron.webp";

function App() {
  const comments = [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: amyrobson,
          webp: amyrobsonwebp,
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: maxblagus,
          webp: maxblagus.webp,
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: ramsesmiron,
              webp: ramsesmironwebp,
            },
            username: "ramsesmiron",
          },
        },
      ],
    },
  ];

  const [userInput, setUserInput] = useState();
  console.log(userInput);

  const [dummycomments, setComments] = useState(comments);

  const commentsUpdater = () => {
    setUserInput(23);
    setComments((oldcomment) => [...oldcomment, userInput]);
    console.log(dummycomments);
  };
  return (
    <div className="App">
      {dummycomments.map((x) => (
        <Card key={x.id}>
          <Commentitem
            key={x.id}
            message={x.content}
            score={x.score}
            username={x.user.username}
            date={x.createdAt}
            picturesrc={x.user.image}
          ></Commentitem>
        </Card>
      ))}

      <Card>
        <Addcomment
          setUserInput={setUserInput}
          commentsupdate={commentsUpdater}
        ></Addcomment>
      </Card>
      <button onClick={commentsUpdater}>UPDATE STATE</button>
    </div>
  );
}

export default App;
