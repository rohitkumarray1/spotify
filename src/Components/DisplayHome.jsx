import React from 'react'
import Albumitem from './Albumitem'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import Songitems from './Songitems'

const DisplayHome = () => {
    return (
        <div>
            <Navbar />
            <div className='mb-4'>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) => (<Albumitem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl '>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (<Songitems key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />))}
                </div>
            </div>
        </div>
    )
}

export default DisplayHome