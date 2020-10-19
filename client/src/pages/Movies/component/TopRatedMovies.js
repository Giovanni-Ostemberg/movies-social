import React from "react";
import M from "materialize-css";
import css from "../style/cards.module.css";
import MovieCard from "./MovieCard";

export default function TopRatedMovies({ topRated }) {
  return (
    <div className={css.card + " row"}>
      {topRated.map((item) => {
        return <MovieCard key={item.id} item={item} />;
      })}
    </div>
  );
}
