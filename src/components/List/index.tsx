import "./list.scss";
import { ListItem } from "../ListItem";
import { GameType } from "../../interfaces/game.interface";

type Props = {
  items: GameType[];
};

export const List = ({ items }: Props): JSX.Element => {
  return (
    <ul className="games">
      {items.map((game) => (
        <ListItem game={game} key={game.slug} />
      ))}
    </ul>
  );
};
