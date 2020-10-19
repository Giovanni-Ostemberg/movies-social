import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
<<<<<<< HEAD
import {getAllUsers} from "../src/services/mongoDB/UserController";
import { isAuthenticated } from "./services/auth";
import SignUp from "./pages/SignUp/index";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
=======
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
>>>>>>> operations/movies

const Routes = () => (
  <BrowserRouter>
    <Switch>
<<<<<<< HEAD
      <Route exact path="/" component={() => <h1>Login</h1>} />
      <Route path="/signup" component={SignUp} getAllUsers={getAllUsers}/>
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
=======
      <Route
        exact
        path="/signin"
        render={() => <SignIn user={user} handleLogin={handleLogin} />}
      />
      <Route path="/signup" render={() => <SignUp createUser={createUser} />} />
      <Route
        path="/movies"
        render={() => (
          <Movies topMovies={fetchTopRatedMovies} foundMovies={findMovies} />
        )}
      />
      <Route path="/app" component={() => <h1>App</h1>} />
>>>>>>> operations/movies
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

<<<<<<< HEAD
export default Routes;
=======
export default Routes;
>>>>>>> operations/movies
