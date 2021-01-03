import axios from "axios";
import serverUrl from "./constants.js"
import bettingAmountArray from "./constants.js"

import AppState from "./appState.js";

export default function findAvailableMatches(){
  let localBettingAmountArray = []
  for(let counter=0;counter<bettingAmountArray;++counter){
    axios.get(serverUrl+"v1/match/available-matches?bettingAmount="+bettingAmount,{
      mode:"cors",
      Accept: 'application/json',
      headers:{
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      localBettingAmountArray.push(response.data)
      AppState.setAvailableMatches(localBettingAmountArray)
      console.log("@@@ this is available matches response : "+ response)
    })
  }
}