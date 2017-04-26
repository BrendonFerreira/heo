class User extends Connection {
  
  constructor(){
    super()
    this.authKey = null;
  }
  
  setAuthKey( authKey ){
    this.authKey = authKey
  }
  
  connectToUser( userId ){
    return HoeBase.getUser(userId).then((result)=>{
      
    })
  }  
  
}
