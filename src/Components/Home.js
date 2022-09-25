import React, { Component } from "react";
import AppBar from './AppBar';
import "../App.css";


console.log("start");

export const Home = () => (
    <section>
      <HomeClass />
    </section>
  );

  class HomeClass extends React.Component {
    render() {
      return (
        <div >
          <div className="content">
          <AppBar/>
            <h1>Home</h1>
          </div>
        </div>
      );
    }
  }