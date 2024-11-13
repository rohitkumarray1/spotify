import { useEffect, useState } from "react";
import { useRef } from "react";
import { createContext } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef()
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playerStatus, setPlayerStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 }
    });

    const play = () => {
        audioRef.current.play();
        setPlayerStatus(true)
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayerStatus(false)
    }

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayerStatus(true)
    }

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayerStatus(true)
        }
    }

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayerStatus(true)
            console.log(songsData)

        }
    }

    const seekSong = async (event) => {
        audioRef.current.currentTime = ((event.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }

            const handleEnded = () => {
                if (track.id < songsData.length - 1) {
                    setTrack(songsData[track.id + 1]);
                }
            };

            const handleCanPlayThrough = () => {
                if (playerStatus) {
                    play();
                }
            };

            audioRef.current.addEventListener("ended", handleEnded);
            audioRef.current.addEventListener("canplaythrough", handleCanPlayThrough);

            return () => {
                audioRef.current.removeEventListener("ended", handleEnded);
                audioRef.current.removeEventListener("canplaythrough", handleCanPlayThrough);
                audioRef.current.ontimeupdate = null; // Cleanup
            };

        }, 1000);
    }, [audioRef, track, playerStatus])


    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track, setTrack,
        playerStatus, setPlayerStatus,
        time, setTime,
        play,
        pause,
        playWithId,
        previous, next,
        seekSong
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;