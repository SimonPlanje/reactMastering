import React from 'react'

function LibarySong({song, setCurrentSong, songs}) {

const songSelectHandler = (e) => {
    const selectedSong = songs.filter((state) => state.id === song.id)
    setCurrentSong(selectedSong[0])
}

  return (
    <div onClick={songSelectHandler} className="libary-song">
      <img alt={song.name}
      src={song.cover}></img>
      <div className="song-description">
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
      </div> 
    </div>
  );
}

export default LibarySong;