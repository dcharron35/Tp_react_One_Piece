import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";


const Informationfruit = (props) => {
    const [infoPerso, setinfoPerso] = useState([]);
    const { idPerso } = useParams();

    
   
    
    useEffect(() => {
        getProducts();
      });
    
      const getProducts = async () => {
        await axios
          .get(`https://api.api-onepiece.com/characters/${idPerso}`)
          .then((res) => {
            setinfoPerso(res.data);
          });
      };
      

  return (
    <div>
        <Navigation />


        <li className="infoPerso">
            <div>
                <h2>
                    Nom :{infoPerso.french_name}    
                </h2>
                <h3> Job : {infoPerso.job}  </h3>
                <h3> Taille : {infoPerso.size}</h3>
                <h3> Date de naissance : {infoPerso.birthday}</h3>
                <h3> age : {infoPerso.age}</h3>
                <h3> Prime : {infoPerso.bounty}</h3>
                
               
                
            </div>
        </li> 
    
    </div>
  );
};

export default Informationfruit;