import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Stylesheets/NavBar.css";
import hamburger from "../images/hamburger.svg"
import close from "../images/close.svg"

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { toggle: false }
    }

    render() {
        const toggle = () => {
            this.setState({ toggle: !this.state.toggle })
        }

        const hamburgerMenu = !this.state.toggle ?
            <div className="extra" >
                <div className="hamburger" >
                    <img onClick={toggle} src={hamburger} alt="hamburger menu" />
                </div>
            </div> :
            <div className="hamburger-container" >
            <div className="hamburger" >
                <img onClick={toggle} src={close} alt="close hamburger menu" />
            </div>
                <ul className="hamburger-list">
                    <Link to="/" style={{textDecoration: "none"}} onClick={toggle} ><li style={{color: "#fff345"}} className="hamburger-list-item">HOME</li></Link>
                    <Link to="/Films" style={{textDecoration: "none"}} onClick={toggle} ><li className="hamburger-list-item">Films</li></Link>
                    <Link to="/People" style={{textDecoration: "none"}} onClick={toggle} ><li className="hamburger-list-item">People</li></Link>
                    <Link to="/Planets" style={{textDecoration: "none"}} onClick={toggle} ><li className="hamburger-list-item">Planets</li></Link>
                    <Link to="/Species" style={{textDecoration: "none"}} onClick={toggle} ><li className="hamburger-list-item">Species</li></Link>
                    <Link to="/Starships" style={{textDecoration: "none"}} onClick={toggle} ><li className="hamburger-list-item">Starships</li></Link>
                    <Link to="/Vehicles" style={{textDecoration: "none"}} onClick={toggle} ><li className="hamburger-list-item">Vehicles</li></Link>
                </ul>
            </div>
        

        return (
            <>
            <div className="container">
                <ul className="list">
                    <Link to="/" style={{textDecoration: "none"}} ><li style={{color: "#fff345"}} className="list-item">HOME</li></Link>
                    <Link to="/Films" style={{textDecoration: "none"}} ><li className="list-item">Films</li></Link>
                    <Link to="/People" style={{textDecoration: "none"}} ><li className="list-item">People</li></Link>
                    <Link to="/Planets" style={{textDecoration: "none"}} ><li className="list-item">Planets</li></Link>
                    <Link to="/Species" style={{textDecoration: "none"}} ><li className="list-item">Species</li></Link>
                    <Link to="/Starships" style={{textDecoration: "none"}} ><li className="list-item">Starships</li></Link>
                    <Link to="/Vehicles" style={{textDecoration: "none"}} ><li className="list-item">Vehicles</li></Link>
                </ul>
            </div>
            <div className="vanish" style={{backgroundColor: "black", width: "100%", position: "absolute", top: 0}}>
                {hamburgerMenu}
            </div>
            </>
        )
    }
}

export default NavBar;