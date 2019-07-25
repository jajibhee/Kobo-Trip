import React, { Component, Fragment } from "react";
import "./App.scss";
import TripList from "./components/TripList";

const tripObject = [
  {
    status: "Transporting",
    statusHistory: [
      {
        _id: "5d00e4294a57c8000d47c5",
        status: "Accepted",
        date: "2019-06-12T11:38:17.876Z",
        userId: 8615,
        userType: "admin"
      },
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
        status: "En-route",
        date: "2019-06-17T23:00:00.000Z",
        userId: 8635,
        userType: "admin"
      },
      {
        _id: "5d0a5ae6c0b537000d88a4a",
        status: "At destination",
        date: "2019-06-17T23:00:00.000Z",
        userId: 8631,
        userType: "admin"
      },
      {
        _id: "5d0a5ae6c0b537000d88a4",
        status: "Delivered",
        date: "2019-06-17T23:00:00.000Z",
        userId: 8636,
        userType: "admin"
      }
    ],
    createdDate: "2019-06-11T13:27:02.164Z",
  }
];

const completed = {
  "status": "Delivered",
  "statusHistory": [
    {
      "_id": "5cdec3fc01e7d8000c917cc0",
      "status": "Loaded",
      "date": "2019-08-04T00:00:00.000Z",
      "userId": 703,
      "userType": "admin"
    },
    {
      "_id": "5cdec3fc01e7d8000c917cc1",
      "status": "Delivered",
      "date": "2019-08-04T00:00:00.000Z",
      "userId": 703,
      "userType": "admin"
    }
  ],
  "createdDate": "2019-08-04T00:00:00.000Z"
}

class App extends Component {
  render() {
    return (
      <Fragment>
        < TripList trips={tripObject} delivered={completed} />
      </Fragment>

    );
  }
}
export default App;
