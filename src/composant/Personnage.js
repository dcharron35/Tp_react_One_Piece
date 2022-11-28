import axios from "axios";
import { useEffect, useState } from "react";
import CartePerso from "./CartePerso";

function Personnage(){

    const [data, setData] = useState( []);
    useEffect(() => {
    axios.get("https://api.api-onepiece.com/characters")
    .then((res)=>setData(res.data));
    },[])
    
    return(
        <div>
            <h1>Liste des personnages</h1>         
            <ul>
                {
                    data.map((LePerso)=>(     
                        <CartePerso Perso={LePerso} />
                    )                                   
                    )                                     
                }
            </ul>          
        </div>
    );
}
export default Personnage;