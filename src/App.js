import "./App.css";
import { Accordion } from "./components/accordion";
import { ImgSlider } from "./components/img-slider";
import { LightDarkMode } from "./components/light-dark-mode";
import { LoadMoreBtn } from "./components/load-more-btn";
import { RandomColor } from "./components/random-color";
import { ScrollIndicator } from "./components/scroll-indicator";
import { StarRating } from "./components/star-rating";

export function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}

      {/* <RandomColor /> */}

      {/* <StarRating numOfStars={10} /> */}

      {/* <ImgSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* <LoadMoreBtn /> */}

      {/* <LightDarkMode /> */}

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}
