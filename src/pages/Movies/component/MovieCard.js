import React from "react";
import css from "../style/cards.module.css";

export default function MovieCard({ item }) {
  const imgSrc = "https://image.tmdb.org/t/p/w92";

  return (
    <div key={item.id} className="col s6 m6">
      <div className="card horizontal">
        <div className="card-image">
          <img src={imgSrc + item.poster_path} />
        </div>
        <div className="card-stacked">
          <h5>{item.title}</h5>
          <div className="card-content">
            <div className={css.cardContent}>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Assistir Depois</span>
              </label>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>Assistido</span>
              </label>
              <div style={{ marginTop: "10px" }}>
                <a class="waves-effect waves-light btn">Compartilhar</a>
              </div>
            </div>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}
