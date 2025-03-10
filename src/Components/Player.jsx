import React from 'react'
import { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const Player = () => {

    const {track, seekBg, seekBar, playerStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext);


  return (
    <div className='h-[10%] bg-black flex justify-between  text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img src={track.image} className='w-12' alt='' />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0, 12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4 '>
                <img src={assets.shuffle_icon} className='w-4 cursor-pointer' alt='' />
                <img onClick={previous} src={assets.prev_icon} className='w-4 cursor-pointer' alt='' />
                {playerStatus
                ? <img onClick={pause} src={assets.pause_icon} className='w-4 cursor-pointer' alt='' />
                : <img onClick={play} src={assets.play_icon} className='w-4 cursor-pointer' alt='' />}
                
                <img onClick={next} src={assets.next_icon} className='w-4 cursor-pointer' alt='' />
                <img src={assets.loop_icon} className='w-4 cursor-pointer' alt='' />
            </div>
            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[40vw] max-w-[500px] bg-gray-300 founded-ful cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75 mt-5'>
            <img src={assets.plays_icon} className='w-4' alt='' />
            <img src={assets.mic_icon} className='w-4' alt='' />
            <img src={assets.queue_icon} className='w-4' alt='' />
            <img src={assets.speaker_icon} className='w-4' alt='' />
            <img src={assets.volume_icon} className='w-4' alt='' />
            <div className='w-10 bg-slate-50 h-1 rounded'></div>
            <img src={assets.mini_player_icon} className='w-4' alt='' />
            <img src={assets.zoom_icon} className='w-4' alt='' />
        </div>
    </div>
  )
}

export default Player