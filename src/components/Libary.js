import React from "react"
import LibarySong from './LibarySong'

const Libary = ({songs, setCurrentSong}) => {
    return(
        <div className="libary">
            <h2>Libary</h2>
            <div className="libary-songs">
                {songs.map(song => <LibarySong song={song} songs={songs} setCurrentSong={setCurrentSong}/>)}
            </div>
        </div>
    )
}

export default Libary