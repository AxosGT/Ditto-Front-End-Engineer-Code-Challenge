import { combineReducers } from 'redux'
import userInfo from './userInfo'
import pageView from './pageView'
import nodeAddress from './nodeAddress'

const setVoteApp = combineReducers({
  userInfo,
  pageView,
  nodeAddress
})

export default setMyApp
