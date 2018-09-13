// MAP INDEX
import React from 'react';
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'
import { connect } from 'react-redux'

function getTileSprite(type){
  switch (type) {
    case 0:
      return 'floor'
    case 1:
      return 'rug'
    case 2:
      return 'unwall'
    case 3:
      return 'bathTiles'
    case 5:
      return 'keycard'
    case 6:
      return 'wall'
    case 7:
      return 'entrance'
      // reserved for changning map to next map in the world index.js
      //event = dispatchInteraction(this.props.player, this.props.map)
    case 8:
      return 'sink'
    case 9:
      return 'counter'
    case 10:
      return 'fridge'
    case 11:
      return 'fog'
    case 12:
      return 'coffee'
    case 13:
      return 'unfloor'
    case 14:
      return 'table'
    case 15:
      return 'michelle'
    case 16:
      return 'prince'
    case 17:
      return 'gem'
    case 18:
      return 'draws'
    case 19:
      return 'toilet'
    case 20:
      return 'noEnter'
    default:
        return null
  }
}

//puts the tile size of each row
function MapTile(props) {
  return <div
    className={`tile ${getTileSprite(props.tile)}`}
    style={{
      height: SPRITE_SIZE,
      width: SPRITE_SIZE,
    }}>
    </div>
}

// puts the rows from Data/maps/1/INDEX on the MAP we created below
function MapRow(props) {
  return <div className="row"
    style={{
      height: SPRITE_SIZE,
    }}>
    {
    props.tiles.map( (tile, index) => <MapTile key={index} tile={tile} /> )
    }
  </div>
}
// creates the ENTIRE MAP
// STYLE  creates the border
function Map (props) {
  console.log(props);
  return (
    <div
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '1280px',
        height: '864px',
        border: '4px solid white',
    }}>
    {
      props.tiles.map( (row, index) => <MapRow key={index} tiles={row} /> )
    }

    {
      props.immovableObjects.map( (obj, index ) => <div key={index} className={obj.className} style={{
        top: `${obj.top}px`,
        left: `${obj.left}px`,
        width: '32px',
        height: '32px',
      }} /> )
    }
  </div>
  )
}


//w800
//h736
function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
    immovableObjects: state.map.immovableObjects
  }
}


export default connect(mapStateToProps)(Map)
