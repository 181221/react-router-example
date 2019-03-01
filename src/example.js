import React, { useState, useEffect } from "react";

function SubEvent(props) {
  const {
    subevent: { location, name, start, stop }
  } = props;
  let tidStart = new Date(start).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit"
  });
  let tidStop = new Date(stop).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit"
  });
  return (
    <div>
      <h1>{location}</h1>
      <div>{name}</div>
      <div>
        {tidStart} - {tidStop}
      </div>
    </div>
  );
}

function Example() {
  const url = "https://demo2480495.mockable.io/events";
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      {data &&
        data.map(event => {
          return (
            <div key={event.id}>
              <div>{event.name}</div>
              <div>{event.start}</div>
              {event.subevents.map(subevent => {
                return <SubEvent key={subevent.id} subevent={subevent} />;
              })}
            </div>
          );
        })}
    </div>
  );
}
export default Example;
