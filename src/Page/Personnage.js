import Logo from '../composant/Logo';
import Navigation from '../composant/Navigation';
import Personnage from './../composant/Personnage';



function App() {
  return (
    <div className="Personnage">
      <Logo/>
      <Navigation />
      <Personnage/>
    </div>
  );
}

export default App;