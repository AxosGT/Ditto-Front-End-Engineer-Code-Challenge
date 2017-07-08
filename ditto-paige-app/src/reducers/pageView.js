import {PAGE_VIEW} from '../actions/index'

function pageView(state =  0, action){
  switch (action.type) {
    case PAGE_VIEW:
      return action.pageID;
    default:
      return state
  }
}

export default pageView
