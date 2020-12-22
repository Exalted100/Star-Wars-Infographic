import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Home";
import NavBar from "./NavBar"
import Footer from "./Footer"
import Films from "./Films"
import StarwarsContext from "../Contexts/StarwarsContext"
import "./Stylesheets/App.css"
import People from "./People";
import Planets from "./Planets"
import Species from "./Species"
import Starships from "./Starships";
import Vehicles from "./Vehicles";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: null,
            people: null,
            planets: null,
            species: null,
            starships: null,
            vehicles: null
        }
    }

    getFilms = async () => {
        const films = await axios.get("https://swapi.dev/api/films/")
        this.setState({ films: films })
    }

    getPeople = async () => {
        const people = await axios.get("https://swapi.dev/api/people/")
        this.setState({ people: people })
    }

    getPlanets = async () => {
        const planets = await axios.get("https://swapi.dev/api/planets/")
        this.setState({ planets: planets })
    }

    getSpecies = async () => {
        const species = await axios.get("https://swapi.dev/api/species/")
        this.setState({ species: species })
    }

    getStarships = async () => {
        const starships = await axios.get("https://swapi.dev/api/starships/")
        this.setState({ starships: starships })
    }

    getVehicles = async () => {
        const vehicles = await axios.get("https://swapi.dev/api/vehicles/")
        this.setState({ vehicles: vehicles })
    }

    componentDidMount() {
        this.getFilms();
        this.getPeople();
        this.getPlanets();
        this.getSpecies();
        this.getStarships();
        this.getVehicles();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar />
                    <StarwarsContext.Provider value={this.state} >
                        <Route path="/" exact component={Home} />
                        <Route path="/Films" component={Films} />
                        <Route path="/People" component={People} />
                        <Route path="/Planets" component={Planets} />
                        <Route path="/Species" component={Species} />
                        <Route path="/Starships" component={Starships} />
                        <Route path="/Vehicles" component={Vehicles} />
                    </StarwarsContext.Provider>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}

export default App;