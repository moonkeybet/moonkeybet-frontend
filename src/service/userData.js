import axios from "axios";
import serverUrl from "./constants.js"
import AppState from "./appState.js";

export default function getUserData(){
  let token = ""
  if(AppState.getSessionToken() != null && AppState.getSessionToken().token != null){
    token = AppState.getSessionToken().token
  }
  axios.get(serverUrl+"v1/user",{
      mode:"cors",
      Accept: 'application/json',
      headers:{
        'Authorization':token,
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      }
    })
  .then((response) => {
    AppState.setUserDetails(response.data)
  });
  axios.get(serverUrl+"v1/user/pub-key",{
    mode:"cors",
    Accept: 'application/json',
    headers:{
      'Authorization':token,
      'Access-Control-Allow-Origin' : '*',
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log("pubkey ",response.data.pubKey)
    AppState.setPublicKey(response.data.pubKey)
  });
}