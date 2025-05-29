import { useState, useEffect } from "react";
import { getImages } from "./components/api";
import { Header } from "./components/header";
import { Tiles } from "./components/tiles";
import bg from "./assets/ball.jpg";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [existImages, setExistImages] = useState([]);
  const [curScore, setCurScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setImages([]);
    const key = () =>
      getImages().then((res) => {
        res.map(async (val) => {
          const result = await val;
          setImages((prev) => [...prev, result]);
        });
      });
    return key;
  }, []);

  function clickTileHandler(id) {
    if (existImages.includes(id)) {
      if (bestScore < curScore) setBestScore(curScore);
      setImages((prev) => getRandImages(prev));
      setExistImages([]);
      setCurScore(0);
      return;
    }
    setImages((prev) => getRandImages(prev));
    setExistImages((prev) => [...prev, id]);
    setCurScore(curScore + 1);
  }

  return (
    <>
      <main>
        <Header curScore={curScore} bestScore={bestScore} />
        <section>
          {images.map((val) => {
            return (
              <Tiles
                key={val.id}
                name={val.species.name}
                imgURL={val.sprites.other["official-artwork"].front_default}
                clickTileHandler={clickTileHandler}
                id={val.id}
                background={bg}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
function getRandImages(images) {
  let dataExist = [];
  const randomImages = images.map(() => {
    let randNum = Math.floor(Math.random() * images.length);
    while (dataExist.includes(images[randNum]))
      randNum = Math.floor(Math.random() * images.length);
    dataExist.push(images[randNum]);
    return images[randNum];
  });
  return randomImages;
}
export default App;
