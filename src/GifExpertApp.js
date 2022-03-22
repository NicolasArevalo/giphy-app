import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";
import { TrendsGrid } from "./Components/trendsGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <div className="banner">
          <span>Creado siguiendo el curso de <a href="https://twitter.com/Fernando_Her85">@Fernando_Her85</a> por <a href="https://nicolasarevalo.tk"><img className="logo" src="./favicon.svg"></img></a>
          </span>
      </div>
      <header>
        <h2>Giphy app 🤠</h2>
        <span>Busca algo de lo que quieras ver gifs (ej: perritos)</span>
        <AddCategory setCategories={setCategories} />
      </header>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      <ol>
        <TrendsGrid />
      </ol>
    </>
  );
};

export default GifExpertApp;
