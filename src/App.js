import logo from './logo.svg';
import './App.css';
import ContactlistComponent from './components/container/contactList';
import Clock from './components/pure/clock';
import Cuadrado from './components/pure/cuadrado';
import Taskformik from './components/pure/forms/taskFormik';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {/* <Clock></Clock> */}
        {/* <ContactlistComponent></ContactlistComponent> */}
        {/* <Cuadrado></Cuadrado> */}
        <Taskformik></Taskformik>
        </div>
        
      </header>
    </div>
  );
}

export default App;
