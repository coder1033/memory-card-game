import "./App.css";
import { useEffect, useState } from "react";
import { cardsId, cardsUrl } from "./cards-data/cards-data.js";
import reshuffle from "./reshuffle/reshuffle.js";
import AllCards from "./components/all-cards.js";
import Header from "./components/header.js";
import GameOver from "./components/game-over.js"

const App = () => {
  const [cards_url] = useState(cardsUrl());
  const [cards, setCards] = useState(reshuffle(cardsId()));
  const [score, setScore] = useState(0);
  const [high_score, setHighScore] = useState(0);
  const [selected, setSelected] = useState({});
  const [game_over, setGameOver] = useState(false);

  useEffect(
    () => {
      if (high_score < score) setHighScore(high_score + 1);
    },
    [score, high_score]
  );

  const onClickCard = (card) => {
    if (selected[card]) {
      setScore(0);
      setSelected((prevSelected) => {
        return {};
      });
      setGameOver(true);
      return;
    }

    setSelected((prevSelected) => ({
      ...prevSelected,
      [card]: true,
    }));

    setScore(score + 1);

    setCards((prevCards) => reshuffle([...prevCards]));
  };

  const onRestart = () => {
    setGameOver(false);
  };

  return (
    <div>
      {game_over && <GameOver onRestart={onRestart}/>}
      <Header score={score} high_score={high_score}/>
      <AllCards onClickCard={onClickCard} cards={cards} cards_url={cards_url} />
    </div>
  );
};

export default App;
