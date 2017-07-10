import {SET_APP_JSON} from '../actions/index'

function setAppJSON(state =  [], action){
  switch (action.type) {
    case SET_APP_JSON:
      return action.setData.eyewear;
    default:
      return state
  }
}

export default setAppJSON
