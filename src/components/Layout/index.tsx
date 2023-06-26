import { Outlet } from "react-router-dom";

import { Header } from "../Header";

import "./layout.scss";
import { Modal } from "../Modal";
import { useContext } from "react";
import { GamesContext } from "../../context/useContext";

export const Layout = (): JSX.Element => {
  const { isSearchOpen } = useContext(GamesContext);

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {isSearchOpen && <Modal />}
    </>
  );
};
