
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



export function buyPost(data) {
  return dispatch => fetch(new Request('/buy', {method: 'POST', body: JSON.stringify(data)}))
  .then(function(response) {
      if(response.status == 200) return response.json();
      else throw new Error('Something went wrong on api server!');
  })
  .then(function(response) {
      console.debug(response);
  })
  .catch(function(error) {
      console.error(error);
  });
}
