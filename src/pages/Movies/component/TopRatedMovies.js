import React from "react";
import M from "materialize-css";
import css from "../style/cards.module.css";

export default function TopRatedMovies({ topRated }) {
  const imgSrc = "https://image.tmdb.org/t/p/w92";

  console.log(topRated);
  return (
    <div class={css.card + " row"}>
      {topRated.map((item) => {
        return (
          <div key={item.id} class="col s4 m4">
            <div class="card horizontal">
              <div class="card-image">
                <img src={imgSrc + item.poster_path} />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>{item.title}</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
