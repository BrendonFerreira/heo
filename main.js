class PeerClient {
  constructor(){
    
  }
  requestConnection()
  sendData(data) {
    
  }
}

class User extends Peer {
  
  constructor(){
    super()
    this.authKey = null;
  }
  
  setAuthKey( authKey ){
    this.authKey = authKey
  }
  
  pairWithUser( peerKeyFromUser ) {
    
  }
  
  testPeerKey( peerKey ) {
    
  }
  
  connectToUser( userId ){
    return Users.getUserById(userId).then(({peerKey})=>{
      return new Promise((resolve, reject) => {
        resolve(peerKey);
      })
    })
  }  
  
}
