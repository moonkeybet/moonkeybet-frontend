import axios from "axios";

import serverUrl from "./constants.js"

export default function register(username, password, callback){
    axios.post(serverUrl+"register", JSON.stringify({
        username,
        password
      }))
      .then((response) => {
        console.log(response);
        callback()
      }, (error) => {
        console.log(error);
      });
}