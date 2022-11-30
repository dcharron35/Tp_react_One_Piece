import axios from "axios";
import { useEffect, useState } from "react";
import Carte from "./carte";

function Composant(){

    const [data, setData] = useState( []);
    useEffect(() => {
    axios.get("https://api.api-onepiece.com/fruits")
    .then((res)=>setData(res.data));
    },[])
    
    return(
        <div>
            <h1>Liste des fruits du démon</h1>
            
            <ul className="infos">
                {
                    data.map((LeFruit)=>(
                        <Carte Fruit={LeFruit} />
                    )
                   
                    
                                        
                    )                                     
                }
            </ul>
            
        </div>

    );

}
export default Composant;