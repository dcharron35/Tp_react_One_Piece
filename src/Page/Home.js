import Logo from '../composant/Logo';
import Navigation from '../composant/Navigation';
import Composant from './../composant/Fruits';
import Fruits from './Fruits';


function App() {
  return (
    <div className="App">
        <Logo/>
        <Navigation />
       <h1>Ce site réfèrent tous les personnages et fruits du démon de One Piece</h1> 
       
       <h2>Réaliser par Dylan CHARRON</h2>
       <h3>Utilise l'api <a href="https://api-onepiece.com/">One Piece</a></h3>
           
    </div>
     );
}

export default App;