import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
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
    let events = this.state.data;
    return (
      <div className="App">
        <div>
          {events &&
            events.map(event => {
              return (
                <div key={event.id}>
                  <Link to={"/subevents/" + event.id}>
                    <p>{event.name}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Home;
