import './App.css';
import Burger from './Nav/Burger';
import background from "./svg/background.svg"
import footer from "./svg/footer.svg"
import {BrowserRouter as  Router } from 'react-router-dom';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Skills from './Component/Skills';



function App() {
  return (
    <div className="App">
      <Router>
     <div className="overlay">
      <Burger />
      <About />
      <Portfolio />
      </div>
      <img src={background} alt="/background" />
      <Skills />
      <img src={footer} className="footer" alt="/footer" />
      
      
      </Router>
    </div>
  );
}

export default App;
