import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../Context/PlayerContext';

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData[id]
    const { playWithId } = useContext(PlayerContext)

    return (
        <>
            <div className='mt-2 flex gap-8 flex-col md:flex-row md:items-end'>
                <img src={albumData.image} className='w-40 rounded' alt='' />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='tex-3xl font-bold md:text-5xl'>{albumData.name}</h2>
                    <p className='text-sm my-4'>{albumData.desc}</p>
                    <div className='mt-1 flex items-center'>
                        <img src={assets.spotify_logo} className='inline-block w-4 mr-2 rounded' alt='' />
                        <div className='flex items-center gap-1'>
                            <h4 className='font-bold text-sm md:text-base'>Spotify </h4>
                            <span className='text-[11px] md:text-base'>• 822,060 saves
                                • 13 songs
                                , about 53 min</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid rid-cols-5 sm:grid-cols-5 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p className='col-span-3 sm:col-span-2'><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img src={assets.clock_icon} className='m-auto w-4' alt='' />
            </div>
            <hr />
            {
                songsData.map((item, index) => (
                    <div key={index} onClick={() => playWithId(item.id)} className='grid grid-cols-5 sm:grid-cols-5 gap-2 p-2 items-center text-[a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                        <div className='text-white flex col-span-3 sm:col-span-2'>
                            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                            <img src={item.image} className='inline w-10 mr-5 cursor-pointer' alt='' />
                            <p>{item.name}</p>
                        </div>
                        <p className='text-[15px]'>{albumData.name}</p>
                        <p className='text-[15px] hidden sm:block'>5 days ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default DisplayAlbum;