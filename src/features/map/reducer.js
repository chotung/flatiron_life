//dealing with the state that the player component needs
//reducers map state to props to the component
// props. some keys
import { tiles, open, mainFloor, mod2, openObjects, tilesObject, moduleOneObjects, moduleTwoObjects, end, endObjects } from '../../data/maps/1'
const initialState = {
  tiles: open,
  immovableObjects: openObjects,
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TILES':
      return {
        ...action.payload
      }

      case 'UPDATE_MAP':
        return {
          tiles,
          immovableObjects:tilesObject
        }

      case 'MAIN_MAP':
        return {
          tiles: mainFloor,
          immovableObjects:moduleOneObjects
        }
      case 'MOD_TWO':
        return {
          tiles: mod2,
          immovableObjects: moduleTwoObjects
        }
      case 'END':
        return {
          tiles: end,
          immovableObjects: endObjects
        }
    default:
      return state
  }
}

export default mapReducer


//mapImageLocation
// export const getSpriteLocation = (direction) => {
//   switch (direction) {
//     case 'WEST':
//       return `-${SPRITE_SIZE }px -${SPRITE_SIZE * 1}px`
//     case 'EAST':
//       return `-${SPRITE_SIZE }px -${SPRITE_SIZE * 2}px`
//     case 'NORTH':
//       return `-${SPRITE_SIZE }px -${SPRITE_SIZE * 3}px`
//     case 'SOUTH':
//       return `-${SPRITE_SIZE }px ${SPRITE_SIZE * 0}px`
//     default:
//   }
// }
