import React, { useState } from 'react'

const Herospans = (props) => {
    const [val, setValue] = useState("")
  return (
    <span className='flex text-black bg-white p-2 rounded-md mr-5 my-2.5 relative select-none'  >
        <span className='flex items-center'>
            {props.icons}
        </span>
        <span className='flex flex-col ml-3'>
                <text className='text-xs'>{props.des}</text>
                <input
                value={val}
                onChange={(e)=>setValue(e.target.value)}
                style={{width:`${props.width}`}} className='text-lg font-medium border-0 outline-none select-none' type={props.type} />
        </span>
    </span>
  )
}

export default Herospans