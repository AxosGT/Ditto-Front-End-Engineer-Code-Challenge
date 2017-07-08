import { combineReducers } from 'redux'
import setAppJSON from './setAppJSON'
import pageView from './pageView'

const setMyApp = combineReducers({
  setAppJSON,
  pageView
})

export default setMyApp
