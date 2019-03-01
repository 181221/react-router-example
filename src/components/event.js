import React from "react";
const Event = ({ match, data }) => {
  if (data && match) {
    let id = match.params.id - 1; //burde ha en sjekk på id
    return (
      <div>
        {data[id].subevents.map(subevent => {
          let tidStart = new Date(subevent.start).toLocaleTimeString(
            navigator.language,
            { hour: "2-digit", minute: "2-digit" }
          );
          let tidStop = new Date(subevent.stop).toLocaleTimeString(
            navigator.language,
            { hour: "2-digit", minute: "2-digit" }
          );
          return (
            <div key={subevent.id}>
              <h3>{subevent.location}</h3>
              <div>{subevent.name}</div>
              <div>
                {tidStart} - {tidStop}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Event;
