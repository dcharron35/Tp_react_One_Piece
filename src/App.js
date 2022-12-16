import './App.css';
import Home from './Page/Home';
import Fruits from './Page/Fruits';
import Personnage from './Page/Personnage';
import Favoris from './Page/Favoris';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import InformationFruit from './composant/informationFruits';
import InformationPerso from './composant/informationPerso';

function App() {
  
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/Fruits" element = {<Fruits/>} />
          <Route path="/Personnage" element = {<Personnage/>} />
          <Route path="/Favoris" element = {<Favoris/>} />
          <Route path="/Fruits/:idFruit" element={< InformationFruit   />} />
          <Route path="/Personnage/:idPerso" element={< InformationPerso   />} />      
        </Routes>     
      </BrowserRouter>
    
  );
}

export default App;
