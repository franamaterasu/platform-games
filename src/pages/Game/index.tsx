import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categories as Menu } from "../../components/Categories";
import { GameType } from "../../interfaces/game.interface";
import "./game.scss";

export const Game = (): JSX.Element => {
  const [game, setGame] = useState<GameType>({
    background_image: "",
    title: "",
    name: "",
    id: "0",
    website: "",
    description_raw: "",
  });
  const { gameId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${gameId}?key=fc884932392946679b56dc3ab6a03779`
    )
      .then((res) => res.json())
      .then((res) => setGame(res));
  }, [gameId]);

  return (
    <>
      <Menu />
      <section className="game">
        <img
          className="game__banner"
          src={game.background_image}
          alt={game.name}
        />
        <h1 className="game__title">{game.name}</h1>
        <p className="game__description">{game.description_raw}</p>
        <div>
          <a href={game.website} className="btn game__link" target="_blank">
            Website
          </a>
        </div>
      </section>
    </>
  );
};
