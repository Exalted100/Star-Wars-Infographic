import React, { Component } from "react";
import "./Stylesheets/Home.css"
import silverSoldier from "../images/silver-soldier.jpg";
import whiteSoldiers from "../images/white-soldiers.jpg";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>STAR WARS: AN INFOGRAPHIC</h1>
                <div className="home-container" >
                    <div className="home-container-div">
                        <p>Star Wars, one of the most remarkable creations of humanity. From a movie in 1977, it has become a religion. Millions of people are part of this religion. From time to time, they will meet. They will be dressed up like Star Wars characters. They will hold light sabers. And then they will gush over the Star Wars Universe in joint admiration. The Universe, with its many species, and many planets, and starships, and characters.Star Wars has the Force, and you can think of it as a miracle. The Force is a mystical power, created by all living things, which binds the galaxy together.</p>
                    </div>
                    <div className="home-container-div">
                        <img src={silverSoldier} alt="Silver Soldier" />
                    </div>
                </div>

                <div className="home-container" >
                    <div className="home-container-div">
                        <img src={whiteSoldiers} alt="White Soldiers" />
                    </div>
                    <div className="home-container-div">
                        <p>Star Wars takes place "a long time ago in a galaxy far, far away". There are many beings in this galaxy: humans, humanoid beings, and non-humanoid beings. These creatures co-exist with droids and robots. Among these, there are two factions that use the Force. There is the dark side, the Siths. And there is the light side, the Jedi. The Siths inspire fear and aggression, while the Jedi draw their powers from arbitration. The Dark Lords of the Siths are "Darths". There are always two, a master and their apprentice. The force-wielders are limited. And the Jedi and the Darths are in a constant tussle.</p>
                    </div>
                </div>

                <div>
                    <p style={{textAlign: "center", margin: "5em", lineHeight: "1.5em"}}>Feel free to check the different information available on Star Wars with the navigation bar.</p>
                </div>
            </div>
        )
    }
}



export default Home;