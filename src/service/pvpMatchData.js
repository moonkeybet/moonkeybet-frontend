import axios from "axios";
import serverUrl from "./constants.js"
import AppState from "./appState.js";

export default function joinOrCreateMatch(isCreate,bettingAmount){
  let token = ""
  if(AppState.getSessionToken() != null && AppState.getSessionToken().token != null){
    token = AppState.getSessionToken().token
  }
  if(isCreate){
    axios.post(serverUrl+"v1/match/create",
    {
      bettingAmount
    },{
      mode:"cors",
      Accept: 'application/json',
      headers:{
        'Authorization':token,
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log("@@@ create match response ",response)
    });
  }else{
    axios.post(serverUrl+"v1/match/findMatch",
    {
      bettingAmount
    },{
      mode:"cors",
      Accept: 'application/json',
      headers:{
        'Authorization':token,
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log("@@@ find match  response ",response)
    });
  }

  

}