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
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
      .then((response) => {
        console.log(response);
        callback()
      }, (error) => {
        console.log(error);
      });
}