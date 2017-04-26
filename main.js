class PeerClient {
  constructor(){
    
  }
  sendSignal(peerKey) {
    
  }
  onSignal(signal) {
  
  }
  sendData(data) {
    
  }
}

class User extends Peer {
  
  constructor(user){
    super()
    this.authKey = null;
    this.user = user
  }
  
  setAuthKey( authKey ){
    this.authKey = authKey
  }
  
  pairWithUser( peerKeyFromUser ) {
    return Users.pairUsers(this.user.auth, peerKeyFromUser)
  }
  
  testPeerKey( peerKey ) {
    this.super.sendSignal(peerKey)
  }
  
  connectToUser( userId ){
    return Users.getUserById(userId).then(({peerKey})=>{
      return new Promise((resolve, reject) => {
        resolve(peerKey);
      })
    })
  }  
  
}
