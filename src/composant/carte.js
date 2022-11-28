
import React from "react";
import { Link } from "react-router-dom";
import Informationfruit from "./informationFruits";


const Carte =({Fruit}) => {
    return ( 
    <Link to={`/Fruits/${Fruit.id}`}>
       <li className="Carte">
            <div>
                <h2>
                    {Fruit.roman_name}
                </h2>
                
            </div>
        </li> 
             
    </Link>
        
         
         
    );
};

export default Carte;