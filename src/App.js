import React from 'react'

//import styles
import './styles/app.scss'

//adding components
import Player from './components/Player'
import Song from './components/Song'

//import Util
import data from './util'


function App() {
  return (
    <div className="App">
      < Song/>
      < Player/>
    </div>
  );
}

export default App;
