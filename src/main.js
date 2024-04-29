import React, { useState } from "react";

const Main = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    "https://imgs.search.brave.com/oOx3-2-0YJUy_jSi6p_1QZFhUZICdQXky1j4jRUUBF8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/OTQwNTItTUxNNzI3/Njg0NzYzMTlfMTEy/MDIzLVcud2VicA",
    "https://imgs.search.brave.com/otRg_W5TGmsflIfrZwoSoiPg_NmsP4d6agPNk19E6QM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG5h/Lmx5c3RpdC5jb20v/NDAwLzUwMC9jL3Bo/b3Rvcy9iYWxlbmNp/YWdhLzIzMzg5NWY0/L2JhbGVuY2lhZ2Et/YmxhY2stU3RlbmNp/bC10eXBlLWJhZ2d5/LWpvZ2dpbmdob3Nl/LmpwZWc",
    "https://imgs.search.brave.com/Fntq-qHtlh9ajOZy55xkKCBj9xM5DHUWvl11KPKdwyc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3R5bGlnaHQu/bmV0L2ltYWdlL3Vw/bG9hZC9lX3RyaW0v/dF93ZWJfcHJvZHVj/dF8zMzB4NDQwbWF4/X25vYmcvcV9hdXRv/OmVjbyxmX2F1dG8v/ZGVyMWM3dHJzMGpx/eW1jZHFuZnIud2Vi/cA"
  ];

  const nextSlide = () => {
    if (slideIndex < images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(images.length - 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="carousel-container" style={{ position: "relative", overflow: "hidden", width: "100%", height: "450px" }}>
            <img src={images[slideIndex]} alt={`Imagen ${slideIndex + 1}`} style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }} />
            <button onClick={prevSlide} style={{ position: "absolute", top: "50%", left: "0px", transform: "translateY(-50%)" }}>{"<"}</button>
            <button onClick={nextSlide} style={{ position: "absolute", top: "50%", right: "300px", transform: "translateY(-50%)" }}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;