import React, { Children, useEffect, useState } from "react";
import TopRatedMovies from "./component/TopRatedMovies";
import MovieResults from "./component/MovieResults";
import M from "materialize-css";

export default function Movies({
  topMovies,
  foundMovies,
  handleProfile,
  createProfile,
}) {
  const [topRated, setTopRated] = useState({});
  const [searchedMovies, setSearchedMovies] = useState({});
  const [profile, setProfile] = useState({});
  const [profiles, setProfiles] = useState({});

  const newTopRated = async () => {
    const topRatedJson = await topMovies();
    setTopRated(await topRatedJson);
    setProfile(await handleProfile("gigio.ostemberg@gmail.com", "Giovanni"));
    console.log(topRated);
  };
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems, {});
  });
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  });

  useEffect(() => {
    const start = async () => {
      await newTopRated();
    };
    console.log(topRated);

    start();
  }, []);

  useEffect(() => {
    const refresh = async () => {
      const allProfiles = await fetch(
        `http://localhost:3001/profiles?user_email=${profile.user_email}`
      );
      const profilesJson = await allProfiles.json();
      setProfiles(profilesJson);
    };
    refresh();
    console.log(profiles);
  }, [profile]);

  //   Executada após a pesquisa
  const filterMovies = async (event) => {
    event.preventDefault();
    setTopRated({});
    const query = document.getElementById("search").value;
    const results = await foundMovies(query);
    console.log(results);
    setSearchedMovies(results);
  };

  // Criação de um novo perfil
  const handleCreateProfile = async (event) => {
    event.preventDefault();
    const newName = document.getElementById("first_name").value;
    const newProfile = await createProfile(newName, profile.user_email);
    await handleProfile("gigio.ostemberg@gmail.com", newName);
    window.alert(newProfile.data);
  };

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <span className="right">{profile.user_email}</span>
          <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
            {profile.profile_name}
          </a>
          <ul id="dropdown1" class="dropdown-content">
            {profiles.length > 0 &&
              profiles.map((item) => {
                return (
                  <li>
                    <a href="#!" key={profile.profile_name}>
                      {item.profile_name}
                    </a>
                  </li>
                );
              })}
            <li>
              <a class="modal-trigger" href="#modal1">
                Novo Perfil
              </a>
            </li>
          </ul>

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

      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4 style={{ textAlign: "center" }}>Novo Perfil</h4>
          <form onSubmit={handleCreateProfile}>
            <div class="row">
              <div class="input-field col s6">
                <input
                  placeholder="Nome único para o perfil"
                  id="first_name"
                  type="text"
                  class="validate"
                />
                <label for="first_name">Nome do Perfil</label>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Criar
          </a>
        </div>
      </div>
    </div>
  );
}
