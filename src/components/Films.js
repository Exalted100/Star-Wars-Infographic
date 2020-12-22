import React from "react"
import "./Stylesheets/Films.css"
import StarwarsContext from "../Contexts/StarwarsContext"

const Films = () => {
    return (
        <div>
            <h1>STAR WARS MOVIES</h1>
            <div className="films-container" >
                <StarwarsContext.Consumer>
                    {(value) => {
                        if (!value.films) {
                            return "No films are available at this time"
                        }  else {
                            return value.films.data.results.map(x => {
                                return <div className="films" key={x.title}>
                                    <div className="films-inner">
                                        <p className="title">{x.title}</p>
                                        <p className="director">{x.director}</p>
                                        <p>{x.producer}</p>
                                        <p>{x.release_date}</p>
                                    </div>
                                </div>
                        }
                            )}}}
                </StarwarsContext.Consumer>
            </div>
        </div>
    )
}

export default Films