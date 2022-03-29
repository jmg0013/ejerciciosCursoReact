import logo from './logo.svg';
import './App.css';
import ContactlistComponent from './components/container/contactList';
import Clock from './components/pure/clock';
import Cuadrado from './components/pure/cuadrado';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {/* <Clock></Clock> */}
        {/* <ContactlistComponent></ContactlistComponent> */}
        <Cuadrado></Cuadrado>
        </div>
        
      </header>
    </div>
  );
}

export default App;
