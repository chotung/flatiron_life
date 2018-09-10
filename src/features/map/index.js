import React from 'react';
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'
import { connect } from 'react-redux'

function getTileSprite(type){
  switch (type) {
    case 0:
      return 'floor'
    case 5:
      return 'keycard'
    case 6:
      return 'tree'
    case 7:
        return 'npc'
    case 11:
        return 'fog'
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
  // console.log(props);
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
  </div>
  )
}


//w800
//h736
function mapStateToProps(state) {
  return {
    tiles: state.map
  }
}


export default connect(mapStateToProps)(Map)
