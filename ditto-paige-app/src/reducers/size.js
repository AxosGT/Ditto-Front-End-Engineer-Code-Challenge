import {SET_SIZE} from '../actions/index'

function setSize(state =  0, action){
  switch (action.type) {
    case SET_SIZE:
      return action.size;
    default:
      return state
  }
}

export default setSize
