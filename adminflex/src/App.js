import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './css/fontawesome-all.min.css';
import './css/app.css';
import './App.css';

function App() { 
  return (
      <Fragment>
        <div className="pagina">
            <Header/>
            <Main/>
        </div>
      </Fragment>
        
  );
}

export default App;
