import axios from "axios";

export default function register(username, password, callback){
    axios.post("http://0.0.0.0:8080/register", JSON.stringify({
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