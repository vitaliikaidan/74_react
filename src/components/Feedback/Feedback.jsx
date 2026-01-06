import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLike = () => setLikes(prev => prev + 1);
  const onDislike = () => setDislikes(prev => prev + 1);
  const onReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback">
      <div className="row">
        <span className="count">{likes}</span>
        <Button name="Like" onButtonClick={onLike} />
      </div>

      <div className="row">
        <Button name="Dislike" onButtonClick={onDislike} />
        <span className="count">{dislikes}</span>
      </div>

      <Button name="Reset Results" onButtonClick={onReset} />
    </div>
  );
}

export default Feedback;