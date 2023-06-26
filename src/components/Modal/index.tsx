import { useContext } from "react";
import { GamesContext } from "../../context/useContext";

import "./modal.scss";
import { List } from "../List";

export const Modal = (): JSX.Element => {
  const { searchedGames, setIsSearchOpen } = useContext(GamesContext);

  const handleCloseClick = (): void => {
    setIsSearchOpen(false);
  };

  return (
    <section className="modal">
      <section className="modal__section">
        <header className="modal__header d-flex align-items-center justify-content-between">
          <h5>Results for Limbo</h5>
          <button
            className="modal__button btn btn-danger"
            onClick={handleCloseClick}>
            Close modal
          </button>
        </header>
        <section className="modal__container">
          <List items={searchedGames} />
        </section>
      </section>
    </section>
  );
};
