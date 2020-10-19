import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {
  handleCreateUser,
  handleLogin,
  user,
} from "../src/services/mongoDB/UserController";
import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/SignUp/index";
import SignIn from "./pages/SigIn/index";
import Movies from "./pages/Movies/main";
import {
  fetchTopRatedMovies,
  findMovies,
} from "./services/mongoDB/MovieController";
import {
  handleChangeProfile,
  handleCreateProfile,
} from "./services/mongoDB/ProfileController";

// const PrivateRoute = ({ component: Component, ...rest }) => (
// <Route
//   {...rest}
//   render={props =>
//     isAuthenticated() ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//     )
//   }
// />
// );

const createUser = handleCreateUser;

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/signin"
        render={() => <SignIn user={user} handleLogin={handleLogin} />}
      />
      <Route path="/signup" render={() => <SignUp createUser={createUser} />} />
      <Route
        path="/movies"
        render={() => (
          <Movies
            topMovies={fetchTopRatedMovies}
            handleProfile={handleChangeProfile}
            createProfile={handleCreateProfile}
            foundMovies={findMovies}
          />
        )}
      />
      <Route path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
