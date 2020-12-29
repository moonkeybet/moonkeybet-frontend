import axios from "axios";

export default function authenticate(username, password, callback){
    axios.post(serverUrl+"authenticate", {
        username,
        password
      })
      .then((response) => {
        console.log(response);
        callback()
      }, (error) => {
        console.log(error);
      });
}