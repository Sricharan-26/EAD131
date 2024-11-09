import { useState } from 'react';
import Timer from './components/Timer';
import PasswordStrengthChecker from './components/Password';
import Calculator from './components/cal';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  return (
    <div className="App">
      <div className="sidebar">
        <h2>Menu</h2>
        <a href="#" onClick={() => setActiveComponent('calculations')}>Calculations</a>
        <a href="#" onClick={() => setActiveComponent('operations')}>Operations</a>
        <a href="#" onClick={() => setActiveComponent('greet')}>Greet</a>
      </div>

      <div className="main-content">
        {/* {activeComponent === 'home' && (
          <div className="buttons">
            <button onClick={() => setActiveComponent('calculations')}>Calculations</button>
            <button onClick={() => setActiveComponent('operations')}>Operations</button>
            <button onClick={() => setActiveComponent('greet')}>Greet</button>
          </div>
        )} */}

        {activeComponent === 'calculations' && (
          <div>
            <Calculator />
            <button onClick={() => setActiveComponent('home')}>Back to Home</button>
          </div>
        )}

        {activeComponent === 'greet' && (
          <div>
            <h1>Hello World</h1>
            <button onClick={() => setActiveComponent('home')}>Back to Home</button>
          </div>
        )}

        {activeComponent === 'operations' && (
          <div>
            <div className="buttons">
              <button onClick={() => setActiveComponent('timer')}>Show Timer</button>
              <button onClick={() => setActiveComponent('passwordChecker')}>Show Password Checker</button>
            </div>
            <button onClick={() => setActiveComponent('home')}>Back to Home</button>
          </div>
        )}

        {activeComponent === 'timer' && (
          <div>
            <Timer />
            <button onClick={() => setActiveComponent('operations')}>Back to Operations</button>
          </div>
        )}
        
        {activeComponent === 'passwordChecker' && (
          <div>
            <PasswordStrengthChecker />
            <button onClick={() => setActiveComponent('operations')}>Back to Operations</button>
          </div>
        )}
      </div>

      <div className="footer">
        <p>&copy; 2024 My Application. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
