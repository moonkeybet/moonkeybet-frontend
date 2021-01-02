import axios from "axios";
import serverUrl from "./constants.js";
import AppState from "./appState.js";

export default function authenticate(username, password, callback){
    axios.post(serverUrl+"authenticate", JSON.stringify({
        username,
        password
      }),{
        mode:"cors",
        Accept: 'application/json',
        headers:{
          'Access-Control-Allow-Origin' : '*',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        AppState.setUserState({
          userState:{username}
        })
        AppState.setSessionToken(response.data)
        callback()
      }).catch(()=>{
        alert("Error. Please try again with different credentials")
      });
}