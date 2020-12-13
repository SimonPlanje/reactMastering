import React, { useState, useEffect } from 'react'

//import styles
import './styles/app.scss'

//adding components
import Player from './components/Player'
import Song from './components/Song'
import Libary from './components/Libary'

//import Util
import data from './util'


function App() {

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)


  return (
    <div className="App">
      < Song currentSong={currentSong}/>
      < Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Libary songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
