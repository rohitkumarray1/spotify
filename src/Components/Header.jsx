import React from 'react'
import { useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className=' h-[10%] rounded flex justify-around'>
            <div onClick={() => navigate('/')} className='flex items-center cursor-pointer gap-10'>
                <img src={assets.spotify_home} className="w-9" alt='' />
                <img src={assets.home_icon} className='w-6' alt='' />
            </div>
            <div className='hidden md:flex items-center gap-4 cursor-pointer bg-[#1f1f1f] py-3 w-[40%]'>
                <img src={assets.search_icon} className='w-6' alt='' />
                <input className='h-full w-full pl-2 bg-transparent rounded-full' type="text" placeholder='What do you want to play?' />
                <img src={assets.browser} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer '>Explore Premium</p>
                <div className='text-white flex items-center gap-1 font-bold py-1 px-3 rounded-2xl text-[15px] cursor-pointer'><img src={assets.install_icon} alt="" /> Install App</div>
                <div>
                    <img className='cursor-pointer' src={assets.notifation} alt="" />
                </div>
                <div>
                    <img className='w-8 rounded-full cursor-pointer' src={assets.user} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;