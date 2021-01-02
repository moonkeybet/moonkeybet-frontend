import getUserData from "./userData.js";

class AppState {

    setUserState(newUserState){
      localStorage.setItem('userState',JSON.stringify(newUserState));
    }

    getUserState(){
      let state = JSON.parse(localStorage.getItem('userState'))
      if(state !== null){
        return state.userState
      }
      return  null
    }

    setSessionToken(token){
      localStorage.setItem('sessionToken', JSON.stringify(token));
    }

    getSessionToken(token){
      return  JSON.parse(localStorage.getItem('sessionToken'));
    }

    logout(){
      localStorage.clear();
    }

    updateUserDetails(){
      getUserData()
    }

    setPublicKey(publicKey){
      localStorage.setItem('publicKey',publicKey);
    }
    
    getPublicKey(){
      return  localStorage.getItem('publicKey');
    }

    setUserDetails(userDetails){
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }

    getUserDetails(){
      return  JSON.parse(localStorage.getItem('userDetails'));
    }
}
export default (new AppState());