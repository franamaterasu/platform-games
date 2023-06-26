import { createContext, useState, useEffect } from "react";

const API_KEY = "fc884932392946679b56dc3ab6a03779";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [games, setGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setGenres(data.results));
  }, []);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  }, []);

  return (
    <GamesContext.Provider
      value={{
        genres,
        games,
        setIsSearchOpen,
        isSearchOpen,
        setSearchedGames,
        searchedGames,
      }}>
      {children}
    </GamesContext.Provider>
  );
};
