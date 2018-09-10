import React from 'react';
import './rpgui.css'


// Work in Progress 


const Progressbar = (props) => {
 // props.player is the state of the player
  return (
    <div className="rpgui-content">
      <label>bar</label>
      <div className="rpgui-progress"></div>
      <div className="rpgui-progress red"></div>
    </div>
  )
}


export default Progressbar
