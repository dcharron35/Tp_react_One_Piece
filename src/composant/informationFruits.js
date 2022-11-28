import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";


const Informationfruit = (props) => {
    const [infoFruit, setinfoFruit] = useState([]);
    const { idFruit } = useParams();

    
   
    
    useEffect(() => {
        getProducts();
      });
    
      const getProducts = async () => {
        await axios
          .get(`https://api.api-onepiece.com/fruits/${idFruit}`)
          .then((res) => {
            setinfoFruit(res.data);
          });
      };
      console.log(idFruit)

  return (
    <div>
        <Navigation />


        <li className="infoFruit">
            <div>
                <h2>
                    Nom :{infoFruit.roman_name}
                    
                </h2>
                <h3>
                    Nom francais : {infoFruit.french_name}
                </h3>
                <h3>
                    Type : {infoFruit.type}
                </h3>
                
                    description : {infoFruit.description}
                
                
            </div>
        </li> 
    
    </div>
  );
};

export default Informationfruit;