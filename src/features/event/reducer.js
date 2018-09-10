// EVENT REDUCER



const initialState = {
  tileType: 0,
  direction: 'WEST'
}

const eventReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENT':
      return {
        ...state,
        tileType: action.payload,
      }
      case 'RESET_EVENT':
        return {
          ...state,
          tileType: action.payload
        }
    default:
      return state
  }
}

export default eventReducer
