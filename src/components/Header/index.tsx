import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { GamesContext } from "../../context/useContext";
import "./header.scss";

export const Header = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { setIsSearchOpen, setSearchedGames } = useContext(GamesContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSearchOpen(true);
  };

  const fetchData = () => {
    fetch(
      `https://api.rawg.io/api/games?key=fc884932392946679b56dc3ab6a03779&search=${searchValue}`
    )
      .then((res) => res.json())
      .then((res) => setSearchedGames(res.results));
  };

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-link">
          <span className="navbar-brand mb-0 h1">Platform Games</span>
        </Link>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="form-control"
            placeholder="Search game..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
};
