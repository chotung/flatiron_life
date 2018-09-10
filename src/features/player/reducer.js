//dealing with the state that the player component needs
//reducers map state to props to the component
// props. some keys
// import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'
import { newPosition, getWalkIndex, getSpriteLocation, makeInteraction } from './movement.js'

const initialState = {
  position: [128, 352],
  spriteLocation: '-32px 0px',
  direction: 'SOUTH',
  walkIndex: 0,
}



// reducer should be handling all player position and movement
const playerReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DIRECTION':
    // updates direction and moves player
      return {
        ...state,
        position: newPosition(state.position, action.payload, action.map),
        direction: action.payload,
        walkIndex: getWalkIndex(state.walkIndex),
        spriteLocation: getSpriteLocation(action.payload, getWalkIndex(state.walkIndex))
      }
    case 'MAKE_INTERACTION':
      return {
        ...state,
        interaction: makeInteraction(state.position, state.direction, action.map)
      }
    default:
      return state
  }
}

export default playerReducer
