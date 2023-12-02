
import React, { useState } from 'react'

const BgChanger = () => {
    const [bgColor, setBgColor] = useState('olive')
    // const changeColor = (color)=>{
    //     setBgColor(color)
    // }
  return (
    <div className='bg-changer' style={{backgroundColor: bgColor}}>
      <button onClick={()=> setBgColor('red')} className='bg-red-500 text-white m-2 p-2 rounded-full'>Red</button>
      <button onClick={()=> setBgColor('blue')} className='bg-blue-500 text-white m-2 p-2 rounded-full'>Blue</button>
      <button onClick={()=> setBgColor('green')} className='bg-green-500 text-white m-2 p-2 rounded-full'>Green</button>

    </div>
  )
}

export default BgChanger
