import {PAGE_VIEW} from '../actions/index'

function pageView(state =  '', action){
  switch (action.type) {
    case PAGE_VIEW:
      return action.pageV;
    default:
      return state
  }
}

export default pageView
