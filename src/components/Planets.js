import React, { Component } from "react"
import StarwarsContext from "../Contexts/StarwarsContext"
import "./Stylesheets/Planets.css"

class Planets extends Component {
    render() {
        return (
            <div>
                <h1>STAR WARS PLANETS</h1>
                <div className="planets-container" >
                <StarwarsContext.Consumer>
                    {(value) => {
                        if (!value.planets) {
                            return "No planets are available at this time"
                        }  else {
                            return value.planets.data.results.map(x => {
                                return <div className="planets" key={x.name}>
                                    <div className="planets-inner">
                                        <p className="name">{x.name}</p>
                                        <p className="climate">{x.climate}</p>
                                        <p>{x.population} living beings</p>
                                        <p>{x.surface_water} surface water</p>
                                    </div>
                                </div>
                        }
                            )}}}
                </StarwarsContext.Consumer>
            </div>
            </div>
        )
    }
}

export default Planets