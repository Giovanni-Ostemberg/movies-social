import React, { Children, useEffect, useState } from "react";
import TopRatedMovies from "./component/TopRatedMovies";
import MovieResults from "./component/MovieResults";
import M from "materialize-css";

export default function Movies({ topMovies, foundMovies }) {
  const [topRated, setTopRated] = useState({});
  const [searchedMovies, setSearchedMovies] = useState({});

  const newTopRated = async () => {
    const topRatedJson = await topMovies();
    setTopRated(await topRatedJson);
    console.log(topRated);
  };

  useEffect(() => {
    const start = async () => {
      await newTopRated();
    };
    console.log(topRated);

    start();
  }, []);

  //   Executada após a pesquisa
  const filterMovies = async (event) => {
    event.preventDefault();
    setTopRated({});
    const query = document.getElementById("search").value;
    const results = await foundMovies(query);
    console.log(results);
    setSearchedMovies(results);
  };

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo right">
            LogOut
          </a>
          <ul id="nav-mobile" class="left">
            <li>
              <a class="waves-effect waves-teal btn-flat white-text">
                Assistir mais tarde
              </a>
            </li>
            <li>
              <a class="waves-effect waves-teal btn-flat white-text">
                Meus Perfis
              </a>
            </li>
            <li>
              <a class="waves-effect waves-teal btn-flat white-text">
                Filmes Sugeridos
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div className="nav-wrapper">
          <form onSubmit={filterMovies}>
            <div className="input-field">
              <input id="search" type="search" />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <div>
        {topRated.results && <TopRatedMovies topRated={topRated.results} />}
        {searchedMovies.results && (
          <MovieResults results={searchedMovies.results} />
        )}
      </div>
    </div>
  );
}
