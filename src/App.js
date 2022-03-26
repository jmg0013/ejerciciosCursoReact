import logo from './logo.svg';
import './App.css';
import ContactlistComponent from './components/container/contactList';
import Clock from './components/pure/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <ContactlistComponent></ContactlistComponent>
        {/* <Clock></Clock> */}
        </p>
        
      </header>
    </div>
  );
}

export default App;
