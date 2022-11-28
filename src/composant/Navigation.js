import React from "react";
import { NavLink } from "react-router-dom";

const Navigation =() => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav)=>(nav.isActive ?"nav-active" : "")}>
                    <li>home</li>
                </NavLink>
                <NavLink to="/Fruits" className={(nav)=>(nav.isActive ?"nav-active" : "")}>
                    <li>Fruits</li>
                </NavLink>
                <NavLink to="/Personnage" className={(nav)=>(nav.isActive ?"nav-active" : "")}>
                    <li>Personnage</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;