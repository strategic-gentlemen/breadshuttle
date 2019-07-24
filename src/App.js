import React from 'react';
import './App.scss';
import routes from './routes';

const breadshuttle = '/assets/breadshuttle.png';

function App() {
  return (
    <div className="App">
      <h1 className='cooltext'>BreadShuttle</h1>
      <img src={breadshuttle} alt=''/>
      {routes}
    </div>
  );
}

export default App;
