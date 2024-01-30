import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
export function ImgSlider({ url, limit = 4, page }) {
  const [imgs, setImgs] = useState([]);
  const [currSlide, setCurrSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImgs(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.msg);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }

  function handlePrev() {
    setCurrSlide(currSlide === 0 ? imgs.length - 1 : currSlide - 1);
    console.log(currSlide);
  }

  function handleNext() {
    setCurrSlide(currSlide === imgs.length - 1 ? 0 : currSlide + 1);
    console.log(currSlide);
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      {imgs && imgs.length
        ? imgs.map((img, index) => (
            <img
              key={img.id}
              alt={img.download_url}
              src={img.download_url}
              className={
                currSlide === index ? "curr-img" : "curr-img hide-curr-img"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {imgs && imgs.length
          ? imgs.map((_, index) => (
              <button
                key={index}
                className={
                  currSlide === index
                    ? "curr-indicator"
                    : "curr-indicator update-curr-indicator"
                }
                onClick={() => setCurrSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
