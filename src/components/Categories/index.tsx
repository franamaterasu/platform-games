import { useContext } from "react";
import { GamesContext } from "../../context/useContext";
import { Link } from "react-router-dom";
import { CategoryType } from "../../interfaces/category.interface";
import "./categories.scss";

export const Categories = (): JSX.Element => {
  const { genres } = useContext(GamesContext);

  return (
    <aside className="categories">
      <ul className="categories__list list-group-flush">
        {genres.map((genre: CategoryType) => (
          <li className="list-group-item categories__item" key={genre.id}>
            <Link
              className="categories__link d-flex align-items-center gap-2"
              to={`/categories/${genre.id}`}>
              <img
                className="categories__image"
                src={genre.image_background}
                alt={genre.name}
                width="50"
                height="35"
              />
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
