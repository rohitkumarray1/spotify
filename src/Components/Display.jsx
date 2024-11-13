import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { albumsData } from '../assets/assets'
import DisplayAlbum from './DisplayAlbum'
import DisplayHome from './DisplayHome'

const Display = () => {

  const displayref = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayref.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayref.current.style.background = `#121212`;
    }
  })

  return (
    <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#463c4b] text-white overflow-auto lg:w-[75%] lg:ml-0 '>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display