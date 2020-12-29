import axios from "axios";
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

export default function register(username, password, callback){
    axios.post("http://localhost:8080/register", {
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