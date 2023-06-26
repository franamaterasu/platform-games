import { useContext } from "react";
import { GamesContext } from "../../context/useContext";
import { List } from "../../components/List";
import { Categories } from "../../components/Categories";
import { Slider } from "../../components/Slider";
import "./home.scss";

export const Home = (): JSX.Element => {
  const { games } = useContext(GamesContext);

  return (
    <>
      <Categories />
      <div>
        <Slider items={games} />
        <h1 className="title">Top games</h1>
        <List items={games} />
      </div>
    </>
  );
};
