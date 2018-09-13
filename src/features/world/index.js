import React, { Component } from 'react';
import Player from '../player'
// import { makeInteraction, observeImpassable } from '../player/movement'
import Map from '../map'
import { connect } from 'react-redux'
import { dispatchDirection, dispatchInteraction, dispatchReset, dispatchEntrance, dispatchMain, dispatchMod2,dispatchEnd } from '../../config/actions'
import Textbox from '../../features/textbox'
import Instruction from '../../features/instruction'
// import BGM from './bgm'
// import Progressbar from '../../features/textbox/progressbar'


class World extends Component {


  handleKeyDown = (e) => {
    // const { position } = this.props.player
    // console.log(this.props.map);
    // console.log(position[0] /32);
    // console.log(position[1] /32);
    // console.log(this.props.map[position[1]/32][position[0]/32]);
    // does some thing?
    // could import a bunch of actions from movement.js
    // update the direction state
    e.preventDefault()
    // console.log(e.keyCode)
    switch (e.keyCode) {
      case 37:
        dispatchReset()
        return dispatchDirection ("WEST", this.props.map)
      case 38:
        dispatchReset()
        return dispatchDirection ("NORTH", this.props.map)
      case 39:
        dispatchReset()
        return dispatchDirection ("EAST", this.props.map)
      case 40:
        dispatchReset()
        return dispatchDirection ("SOUTH", this.props.map)
      case 90:
        let event = dispatchInteraction(this.props.player, this.props.map)
        if(event === 5){
          // console.log(this.props.event.tileType);
          return dispatchEntrance()
        }
        else if (event === 7) {
          return dispatchMain()
        }
        else if (event === 17) {
          return dispatchMod2()
        }
        else if (event === 24) {
          return dispatchEnd()
        }
        break;
        // }
      // case 32:
        // if (makeInteraction(pos, dir, map) === 10)
        // if player position matches this zone map[x][y] === 10 to player.position
      default:
        return null
      }
  }

render(){
  // console.log(this.props);

    return (
      <div
        onKeyDown={this.handleKeyDown}
        tabIndex='0'
        style={{
          position: 'relative',
          width: '1280px',
          height: '864px',
          margin: '20px auto',
        }}>

        <Map />
        <Player />
        <Textbox />
        <Instruction />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    player: state.player,
    map: state.map.tiles,
    event: state.event
  }
}

export default connect(mapStateToProps)(World)
