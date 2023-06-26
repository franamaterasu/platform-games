import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GameType } from "../../interfaces/game.interface";
import { Link } from "react-router-dom";
import "./slider.scss";

type Props = {
  items: GameType[];
};

export const Slider = ({ items }: Props): JSX.Element => {
  return (
    <Carousel
      className="slider"
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}>
      {items.slice(0, 5).map((item: GameType) => {
        return (
          <Link to={`/game/${item.id}`}>
            <div className="slider__item">
              <img
                className="slider__image"
                src={item.background_image}
                alt={item.name}
              />
            </div>
          </Link>
        );
      })}
    </Carousel>
  );
};
