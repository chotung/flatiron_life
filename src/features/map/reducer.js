//dealing with the state that the player component needs
//reducers map state to props to the component
// props. some keys
import { tiles, open, mainFloor } from '../../data/maps/1'
// const initialState = {
//   tiles: [],
// }

const mapReducer = (state = open, action) => {
  switch (action.type) {
    case 'ADD_TILES':
      return {
        ...action.payload
      }
      case 'UPDATE_MAP':
        return tiles
      case 'MAIN_MAP':
        return mainFloor
        break;
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
