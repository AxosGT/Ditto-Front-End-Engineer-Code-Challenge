
export const SET_SIZE = 'SET_SIZE'
export const PAGE_VIEW = 'PAGE_VIEW'
export const SET_APP_JSON ='SET_APP_JSON'

export function setSize(size){
  return {type: SET_SIZE, size}
}

export function setAppJSON(setData){
  return {type: SET_APP_JSON, setData}
}

export function pageView(pageID){
  return {type: PAGE_VIEW, pageID}
}

export function loadAppJSON() {
  return dispatch => fetch('/eyewear-selector/eyewear.json')
    .then(
      response => response.json(),
      error => console.log('error', error)
    ).then(
      data => dispatch(setAppJSON(data)),
      error => console.log('error', error)
    )
  ;
}
