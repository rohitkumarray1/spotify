import React, { useContext } from "react"
import './App.css';
import Display from "./Components/Display";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Sidebar from "./Components/Sidebar";
import { PlayerContext } from "./Context/PlayerContext";

function App() {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <React.Fragment>
      <div className="h-screen bg-black ">
        <Header />
        <div className="h-[80%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </React.Fragment>
  );
}

export default App;
