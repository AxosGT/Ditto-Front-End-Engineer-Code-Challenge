
export const USERINFO ='USERINFO'
export const NODEADDRESS = 'NODEADDRESS'
export const PAGEVIEW = 'PAGEVIEW'
export const PAGELOAD ='PAGELOAD'

export function pageLoad(lodeData){
  return{type: PAGELOAD, lodeData}
}

export function pageView(pageV){
  return {type: PAGEVIEW, pageV}
}
