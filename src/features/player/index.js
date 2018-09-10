import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
// import handleMovement from './movement'
// import store from '../../config/store'
// import { getNewPosition } from '../../config/actions'



const Player = (props) => {

  return (
    <div style={{
      position: 'absolute',
      top: props.player.position[1], //starting x
      left: props.player.position[0], //starting y
      backgroundImage: `url(${walkSprite})`,
      backgroundPosition: props.player.spriteLocation,
      width: '32px',
      height: '32px',
    }}/>
  )
}


function mapStateToProps(state) {
  return {
    player: state.player,
    map: state.map
  }
}
export default connect(mapStateToProps)(Player)
