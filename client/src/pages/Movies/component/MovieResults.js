import React from "react";
import css from "../style/cards.module.css";
import MovieCard from "./MovieCard";

export default function MovieResults({ results }) {
  return (
    <div className={css.card + " row"}>
      {results.map((item) => {
        return <MovieCard key={item.id} item={item} />;
      })}
    </div>
  );
}
