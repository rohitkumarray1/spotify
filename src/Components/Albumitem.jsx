import React from 'react'

import {useNavigate} from "react-router-dom";

const Albumitem = ({image, name, desc, id}) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] '>
        <img src={image} className='founded' alt='' />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{`${desc.slice(0, 43)}...`}</p>
    </div>
  )
}

export default Albumitem;