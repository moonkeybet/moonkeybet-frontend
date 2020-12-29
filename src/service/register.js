import axios from "axios";

import serverUrl from "./constants.js"

export default function register(username, password, callback){
    axios.post(serverUrl+"register", JSON.stringify({
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
        console.log(response);
        callback()
      }, (error) => {
        console.log(error);
      });
}