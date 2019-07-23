import React, { Component, Fragment } from "react";
import "./App.scss";
import TripList from "./components/TripList";

const tripObject = [
  {
    status: "Transporting",
    statusHistory: [
      {
        _id: "5d00e4294a57c8000d4d27c5",
        status: "Positioned",
        date: "2019-06-12T11:38:17.876Z",
        userId: 8635,
        userType: "admin"
      },
      {
        _id: "5d0391f14a57c8000d4d2806",
        status: "In-premise",
        date: "2019-06-14T12:24:17.963Z",
        userId: 8749,
        userType: "admin"
      },
      {
        _id: "5d0391f64a57c8000d4d280c",
        status: "Loaded",
        date: "2019-06-14T12:24:22.445Z",
        userId: 8749,
        userType: "admin"
      },
      {
        _id: "5d0a5ae6c0b537000d88a4a0",
        status: "Transporting",
        date: "2019-06-17T23:00:00.000Z",
        userId: 8635,
        userType: "admin"
      }
    ],
    createdDate: "2019-06-11T13:27:02.164Z",
  }
];

class App extends Component {
  render() {
    return (
      <Fragment>
        < TripList trips={tripObject} />
      </Fragment>

    );
  }
}
export default App;
