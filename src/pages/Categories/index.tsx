import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categories as Menu } from "../../components/Categories";
import { List } from "../../components/List";

import "./categories.scss";
import { CategoryType } from "../../interfaces/category.interface";

export const Categories = (): JSX.Element => {
  const [category, setCategory] = useState<CategoryType>({
    id: "0",
    name: "",
    image_background: "",
  });
  const [page, setPage] = useState<number>(1);
  const [categoryGames, setCategoryGames] = useState<CategoryType[]>([]);
  const { categoryId } = useParams();

  const categoryNumber = Number(categoryId);

  const handleNextClick = (): void => {
    setPage(page + 1);
  };

  const handlePrevClick = (): void => {
    setPage(page - 1);
  };

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/genres/${categoryNumber}?key=fc884932392946679b56dc3ab6a03779`
    )
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, [categoryId]);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=fc884932392946679b56dc3ab6a03779&genres=${categoryId}&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => setCategoryGames(res.results));
  }, [page, categoryId]);

  return (
    <>
      <Menu />
      <section className="categories">
        <img
          className="categories__banner"
          src={category.image_background}
          alt={category.name}
        />
        <h1 className="categories__name">{category.name}</h1>
        <List items={categoryGames} />
        <section className="categories__buttons d-flex align-items-center justify-content-center gap-3">
          {page > 1 && (
            <button
              className="categories__button btn"
              onClick={handlePrevClick}>
              Prev
            </button>
          )}
          <button className="categories__button btn" onClick={handleNextClick}>
            Next
          </button>
        </section>
      </section>
    </>
  );
};
