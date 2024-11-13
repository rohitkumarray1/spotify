import React from 'react'

const Navbar = () => {


    return (
        <>
            <div className='flex items-center gap-2 h-10'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4 text-white py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
            <h1 className='my-5 font-bold text-2xl '>Featured Charts</h1>
        </>
    )
}

export default Navbar