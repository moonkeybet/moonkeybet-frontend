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

}
export default (new AppState());