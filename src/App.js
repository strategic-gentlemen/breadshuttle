import React from 'react';
import './App.scss';
import routes from './routes';
import Nav from './components/common/NavBar';

function App() {
  return (
    <div className="App">
      {
        window.location.pathname !== '/login' && window.location.pathname !== '/register' ?
        <Nav /> :
        null
      }
      {routes}
    </div>
  );
}

export default App;
