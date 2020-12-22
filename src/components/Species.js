import React, { Component } from "react"
import StarwarsContext from "../Contexts/StarwarsContext"
import "./Stylesheets/Species.css"

class Species extends Component {
    render() {
        return (
            <div>
                <h1>STAR WARS SPECIES</h1>
                <div className="species-container" >
                <StarwarsContext.Consumer>
                    {(value) => {
                        if (!value.species) {
                            return "No species are available at this time"
                        }  else {
                            return value.species.data.results.map(x => {
                                return <div className="species" key={x.name}>
                                    <div className="species-inner">
                                        <p className="species-name">{x.name}</p>
                                        <p className="language">{x.language}</p>
                                        <p>{x.classification}</p>
                                        <p>{x.designation}</p>
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

export default Species