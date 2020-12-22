import React, { Component } from "react"
import StarwarsContext from "../Contexts/StarwarsContext"
import "./Stylesheets/Starships.css"

class Starships extends Component {
    render() {
        return (
            <div>
                <h1>STAR WARS STARSHIPS</h1>
                <div className="starships-container" >
                <StarwarsContext.Consumer>
                    {(value) => {
                        if (!value.starships) {
                            return "No starships are available at this time"
                        }  else {
                            return value.starships.data.results.map(x => {
                                return <div className="starships" key={x.name}>
                                    <div className="starships-inner">
                                        <p className="starships-name">{x.name}</p>
                                        <p className="manufacturer">{x.manufacturer}</p>
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

export default Starships