import React from 'react';
import './App.css';
import routes from './routes';

const breadshuttle = '/assets/breadshuttle.png';

function App() {
  return (
    <div className="App">
      <h1>BreadShuttle</h1>
      <img src={breadshuttle} alt=''/>
      {routes}
    </div>
  );
}

export default App;
