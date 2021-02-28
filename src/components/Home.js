import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import ToDoList from "../pages/ToDoList";

class Home extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/to-do-list" render={() => <ToDoList />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
