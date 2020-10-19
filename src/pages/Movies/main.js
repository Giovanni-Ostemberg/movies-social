import React, { useEffect, useState } from "react";
import TopRatedMovies from "./component/TopRatedMovies";
import M from "materialize-css";

export default function Movies({ movies }) {
  const [topRated, setTopRated] = useState({});

  const newTopRated = async () => {
    const topRatedJson = await movies();
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

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input id="search" type="search" />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <div>
        {topRated.results && <TopRatedMovies topRated={topRated.results} />}

        {/* {topRated ? topRated.map((item)=>{
            return(<p>{item}</p>)
        }) : <p>Esperando...</p>   } */}
      </div>
    </div>
  );
}
