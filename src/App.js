import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Formateurs } from "./Components/Formateurs";
import { Home } from "./Components/Home";
import './App.css';


class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Formateurs" element={<Formateurs/>} />
          <Route element={<Formateurs/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
