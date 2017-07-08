import { combineReducers } from 'redux'
import setAppJSON from './setAppJSON'
import pageView from './pageView'
import setSize from './size'

const setMyApp = combineReducers({
  setAppJSON,
  pageView,
  setSize
})

export default setMyApp
