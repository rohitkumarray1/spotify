import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'
import { songsData } from '../assets/assets'

const Sidebar = () => {
    const { playWithId } = useContext(PlayerContext);


    return (
        <div className=' h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className=' h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between hover:bg-[#242424]'>
                    <div className='flex items-center gap-3 cursor-pointe'>
                        <img src={assets.stack_icon} className='w-7' alt='' />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={assets.arrow_icon} className='w-4 cursor-pointer' alt='' />
                        <img src={assets.plus_icon} className='w-4 cursor-pointer' alt='' />
                    </div>
                </div>
                {/* <button onClick={loopMusic}>looop</button> */}

                <div className='p-4 pr-0 h-[30%] overflow-auto'>
                    <div>
                        {
                            songsData.map((item, index) =>
                                <div key={index} onClick={() => playWithId(item.id)}>
                                    <div className='cursor-pointer flex items-center'>
                                        <img src={item.image} className="w-14 p-2" alt='' />
                                        <div className='pl-4'>
                                        <h3 className='font-semibold'>{item.name}</h3>
                                        <p className='text-sm'>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>


                <div className='p-4 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 hover:bg-[#242424]'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>it's easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
                </div>
                <div className='p-2 m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 hover:bg-[#242424]'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>we will keep you update on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar