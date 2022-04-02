import React, { useState } from "react";
import Block from "../Block/Block";
import "./home.scss";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [delay, setDelay] = useState(null);
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const start = () => {
    setDelay(2000 + Math.random() * 5000);
    setIsPlaying(true);
    setShowResults(false);
  };
  const endGame = (sc) => {
    setScore(sc);
    setIsPlaying(false);
    setShowResults(true);
  };

  return (
    <div className="home">
      <h1 className="home__header">Reaction Game</h1>
      <button onClick={() => start()} className="home__button">
        Play
      </button>
      {showResults && (
        <div className="home__results">
          Results:
          {score}
        </div>
      )}
      {isPlaying && <Block delay={delay} endGame={endGame} />}
    </div>
  );
};

export default Home;
