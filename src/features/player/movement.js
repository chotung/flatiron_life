// import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

// export default function handleMovement(player) {


  export const newPosition = (position, direction, map) => {
    let newPos = getNewPosition(position, direction)
    // checks position against map to see if you can pass through npc
    if (observeImpassable(newPos, map) >= 5) {
      return position
    } else {
        return newPos
    }
  }

  const getNewPosition = (position, direction) => {
    // moves within boundaries
    switch(direction) {
      case 'WEST':
        return position[0] !== 0 ? [ position[0]-SPRITE_SIZE, position[1] ] : position;
      case 'EAST':
        return position[0] < MAP_WIDTH - SPRITE_SIZE ? [ position[0]+SPRITE_SIZE, position[1] ] : position
      case 'NORTH':
        return position[1] !== 0 ? [ position[0], position[1]-SPRITE_SIZE ] : position;
      case 'SOUTH':
        return position[1] < MAP_HEIGHT - SPRITE_SIZE ? [ position[0], position[1]+ SPRITE_SIZE ] : position
      default:
        return null
    }
  }

  export const observeImpassable = (position, map) => {
    // console.log(map);
    // gets the next tile type
    let y = position[1] / SPRITE_SIZE
    let x  = position[0] / SPRITE_SIZE
    // console.log('y', y);
    // console.log('x', x);
    // console.log(map);
    const nextTileType = map[y][x]
    // console.log(nextTileType)
    return nextTileType
  }

  export const getWalkIndex = (walkIndex) => {
    //increases walk index then resets it
    return walkIndex >= 2 ? 0 : walkIndex + 1
  }

  export const getSpriteLocation = (direction, walkIndex) => {
    //changes where on the sprite map its rendering
    //based on direction and walkeIndex
    //direction shows which way its facing
    //walk index is controlling laterally what image is being shown
    switch (direction) {
      case 'WEST':
        return `-${SPRITE_SIZE * walkIndex}px -${SPRITE_SIZE * 1}px`
      case 'EAST':
        return `-${SPRITE_SIZE * walkIndex}px -${SPRITE_SIZE * 2}px`
      case 'NORTH':
        return `-${SPRITE_SIZE * walkIndex}px -${SPRITE_SIZE * 3}px`
      case 'SOUTH':
        return `-${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`
      default:
    }
  }


// CHANGES THE TILETYPE IN EVENT STATE
// based on what tile type is near and what direction
// [direction not implemented yet]
  // is player near npc?
  // is the player direction facing npc?
  // is this an interactble zone?
  export const makeInteraction = (position, direction, map) => {
    const newPos = getNewPosition(position, direction)
    const tileCheck = observeImpassable(newPos, map)
      if (observeImpassable(newPos, map) === 7 ) {
        // && direction === "WEST"
          return 7
          // should change the state of event so it will render a different event
      } else if (tileCheck === 6) {
        return 6
      }else if (tileCheck === 5) {
        return 5
      }else if (tileCheck === 8) {
        return 8
      }else if (tileCheck === 9) {
        return 9
      }else if (tileCheck === 10) {
        return 10
      }else if (tileCheck === 11) {
        return 11
      }else if (tileCheck === 12) {
        return 12
      }else if (tileCheck === 13) {
        return 13
      }else if (tileCheck === 14) {
        return 14
      }else if (tileCheck === 15) {
        return 15
      }else if (tileCheck === 16) {
        return 16
      }else if (tileCheck === 17) {
        return 17
      }else if (tileCheck === 18) {
        return 18
      }else if (tileCheck === 19) {
        return 19
      }else if (tileCheck === 20) {
        return 20
      }else if (tileCheck === 21) {
        return 21
      }else if (tileCheck === 22) {
        return 22
      }else if (tileCheck === 23) {
        return 23
      }else if (tileCheck === 24) {
        return 24
      }

  }
