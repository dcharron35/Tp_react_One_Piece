import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";




const CartePerso =({Perso}) => {
//const  dispatch =useDispatch();
    return ( 
    <Link to={`/Personnage/${Perso.id}`}>
       <li className="Carte">
            <div>
                <h2>
                    {Perso.french_name}
                </h2>                            
            </div>
        </li> 
    </Link>           
        );
};

export default CartePerso;