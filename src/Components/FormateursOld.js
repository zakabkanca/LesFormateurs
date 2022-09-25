import React, { Component } from "react";
import AppBar from './AppBar';
import axios from "axios";
import "../App.css";


console.log("start");

export const Formateurs = () => (
    <section>
      <FormateursClass />
    </section>
  );

  class FormateursClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          formations: {},
          Loaded: false
        };
    
        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        //this.handleClick = this.handleClick.bind(this);
        //this.circleClick = this.circleClick.bind(this);
      }
    componentDidMount() {
        var result;
    
        axios
          .get(
            `http://localhost:443/getFormateurs`
          )
          // We get the API response and receive data in JSON format...
          .then(response => response.data)
          // ...then we update the users state
          .then(data => {
            this.setState({
              formations: data,
              Loaded: true
            });
            console.log("ComponentDidmounT");
            console.log("this.state.Loaded = ");
            console.log(this.state.Loaded);
            console.log("this.state.formations = ");
            console.log(this.state.formations);
          });
        // Catch any errors we hit and update the app
        //.catch(error => this.setState({ error, isLoading: false }));
      }

    render() {
      return (
        <div >
          <div className="content">
            <h1>Formateurs</h1>
            <AppBar/>
          </div>
        </div>
      );
    }
  }
