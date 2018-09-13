// TEXTBOX INDEX.js

import React from 'react'
import './rpgui.css'
import { connect } from 'react-redux'
import { dialog1, chest, fridge, sink, counter, michelle, keycard, coffee, prince, ruby, table, innerTable, draws, toilet, noEnter, dark} from './dialog'
// import { dispatchNewMap } from '../../config/actions'


// conditional rendering based on state of Event
// use switch statements
 const events= (props) => {
   console.log(props.event.tileType);
   switch (props.event.tileType) {
    case 0:
      return "FACING " + props.player.direction
    case 5:
      // return dispatchNewMap() + "im doing stuff"
      return keycard
    case 6:
      return chest
    case 7:
      return dialog1
    case 8:
      return sink
    case 9:
      return counter
    case 10:
      return fridge
    case 11:
      return dark
    case 12:
      return coffee
    case 13:
      return table
    case 14:
      return innerTable
    case 15:
      return michelle
    case 16:
      return prince
    case 17:
      return ruby //
    case 18:
      return draws
    case 19:
      return toilet
    case 20:
      return noEnter
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
