import { useContext } from "react";
import { GamesContext } from "../../context/useContext";
import { Link } from "react-router-dom";
import "./listItem.scss";
import { GameType } from "../../interfaces/game.interface";

type Props = {
  game: GameType;
};

export const ListItem = ({ game }: Props): JSX.Element => {
  const { setIsSearchOpen } = useContext(GamesContext);

  const handleCloseModalClick = (): void => {
    setIsSearchOpen(false);
  };

  return (
    <li>
      <div className="card">
        <img
          src={game.background_image}
          className="card-img-top"
          alt={game.name}
          height="250"
        />
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to={`/game/${game.id}`}
            className="card-button btn"
            onClick={handleCloseModalClick}>
            View Details
          </Link>
        </div>
      </div>
    </li>
  );
};
