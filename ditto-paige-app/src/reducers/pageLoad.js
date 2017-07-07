import {PAGELOAD} from '../actions/index'

function pageLoad(state =  '', action){
  switch (action.type) {
    case PAGELOAD:
      return action;
    default:
      return state
  }
}

export default pageLoad
