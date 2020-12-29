import axios from "axios";
import serverUrl from "./constants.js"

export default function authenticate(username, password, callback){
    axios.post(serverUrl+"authenticate", JSON.stringify({
      username,
      password
    }),{
      mode:"cors",
      Accept: 'application/json',
      headers:{
        'Content-Type': ' application/json'
      }
    })
      .then((response) => {
        console.log(response);
        callback()
      }, (error) => {
        console.log(error);
      });
}