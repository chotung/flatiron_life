// TEXTBOX INDEX.js

import React from 'react'
import './rpgui.css'
import { connect } from 'react-redux'
import { dialog1, chest } from './dialog'
// import { dispatchNewMap } from '../../config/actions'


// conditional rendering based on state of Event
// use switch statements
 const events= (props) => {
   switch (props.event.tileType) {
    case 0:
      return "FACING " + props.player.direction
    case 5:
      // return dispatchNewMap() + "im doing stuff"
      return "You found a keycard! Now you can enter the magical world of web development!"
    case 6:
      return chest
    case 7:
      return dialog1
     default:

   }
 }





const Textbox = (props) => {
 // props.player is the state of the player
  return (
    <div className="rpgui-content">
      <div className="rpgui-container framed-golden-2">
        {events(props)}
      </div>
    </div>
  )
}

// { "Facing " + props.player.direction.toLowerCase()}

function mapStateToProps(state) {
  return {
    player: state.player,
    event: state.event,
  }
}

export default connect(mapStateToProps)(Textbox)
