import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import Event from "./components/event";
import { Switch } from "react-router";
import { HashRouter, Route } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      url: "https://demo2480495.mockable.io/events"
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/subevents/:id"
            render={props => <Event {...props} data={this.state.data} />}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
