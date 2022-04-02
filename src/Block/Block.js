import "./block.scss";
import { useState } from "react";

const Block = (props) => {
  const [showBlock, setShowBlock] = useState(false);
  const [reactionTime, setReactionTime] = useState(0);
  let timer = 0;
  const startTimer = () => {
    setInterval(() => {
      timer += 10;
      setReactionTime(timer);
    }, 10);
  };

  setTimeout(() => {
    setShowBlock(true);
    startTimer();
  }, props.delay);

  const stopTimer = () => {
    props.endGame(reactionTime);
    setReactionTime(0);
  };
  return (
    <div>
      {showBlock && (
        <div className="block">
          <div onClick={() => stopTimer()} className="block__container"></div>
        </div>
      )}
    </div>
  );
};

export default Block;
