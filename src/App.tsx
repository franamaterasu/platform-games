import { Routes, Route } from "react-router-dom";
import { GamesProvider } from "./context/useContext";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Game } from "./pages/Game";

export const App = (): JSX.Element => {
  return (
    <GamesProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories/:categoryId" element={<Categories />} />
          <Route path="/game/:gameId" element={<Game />} />
        </Route>
      </Routes>
    </GamesProvider>
  );
};
