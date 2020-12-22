import React, { Component } from "react"
import StarwarsContext from "../Contexts/StarwarsContext"
import "./Stylesheets/Vehicles.css"

class Vehicles extends Component {
    render() {
        return (
            <div>
                <h1>STAR WARS VEHICLES</h1>
                <div className="vehicles-container" >
                <StarwarsContext.Consumer>
                    {(value) => {
                        if (!value.vehicles) {
                            return "No vehicles are available at this time"
                        }  else {
                            return value.vehicles.data.results.map(x => {
                                return <div className="vehicles" key={x.name}>
                                    <div className="vehicles-inner">
                                        <p className="vehicles-name">{x.name}</p>
                                        <p className="vehicles-manufacturer">{x.manufacturer}</p>
                                        <p>{x.passengers} passengers</p>
                                        <p>{x.cost_in_credits} cost in credits</p>
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

export default Vehicles