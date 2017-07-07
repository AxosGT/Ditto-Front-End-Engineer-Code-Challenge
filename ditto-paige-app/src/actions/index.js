import {fb, logInFBGoogle} from '../myFireBase';

export const USERINFO ='USERINFO'
export const NODEADDRESS = 'NODEADDRESS'
export const PAGEVIEW = 'PAGEVIEW'

//actUser = fb.auth().currentUser

export function pageView(pageV){
  return {type: PAGEVIEW, pageV}
}
