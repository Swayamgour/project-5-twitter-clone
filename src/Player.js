import React from 'react'
import  ReactPlayer from 'react-player'
import './App.css'
function Player() {
  return (
    <div className='video'>Player
    <div >                  
        <ReactPlayer  className='player'    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'   width='30%' height='50vh'/>
    </div>
    </div>
  )
}

export default Player