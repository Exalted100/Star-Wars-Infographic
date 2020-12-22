import React, { Component } from "react"
import StarwarsContext from "../Contexts/StarwarsContext"
import "./Stylesheets/People.css"

class People extends Component {
    render() {
        return (
            <div>
                <h1>STAR WARS CHARACTERS</h1>
                <div className="people-container" >
                <StarwarsContext.Consumer>
                    {(value) => {
                        if (!value.people) {
                            return "No people are available at this time"
                        }  else {
                            return value.people.data.results.map(x => {
                                return <div className="people" key={x.name}>
                                    <div className="people-inner">
                                        <p className="name">{x.name}</p>
                                        <p className="gender">{x.gender === "n/a" ? "no gender" : x.gender}</p>
                                        <p>{x.skin_color}</p>
                                        <p>{x.birth_year}</p>
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

export default People