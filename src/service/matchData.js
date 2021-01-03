import axios from "axios";
import serverUrl from "./constants.js"
import AppState from "./appState.js";
import bettingAmountArray from "./betAmountsConstant.js";

export default function getUpdateMatchData(){
  let token = ""
  if(AppState.getSessionToken() != null && AppState.getSessionToken().token != null){
    token = AppState.getSessionToken().token
  }
  let matchDataArray = []
  for(let counter =0;counter<bettingAmountArray.length;++counter){
    axios.get(serverUrl+"v1/match/available-matches?betAmount="+bettingAmountArray[counter],{
      mode:"cors",
      Accept: 'application/json',
      headers:{
        'Authorization':token,
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      }
    })
  .then((response) => {
    matchDataArray.push(response.data)
    // console.log("@@@ this is match data array at  " + counter, matchDataArray)
    AppState.setAvailableMatches(matchDataArray)
  });
  }

}