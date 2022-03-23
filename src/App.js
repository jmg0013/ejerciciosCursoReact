import logo from './logo.svg';
import './App.css';
import ContactlistComponent from './components/container/contactList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ContactlistComponent></ContactlistComponent>
        </p>
        
      </header>
    </div>
  );
}

export default App;
