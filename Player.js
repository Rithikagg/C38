class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
updatePlayerDetails(){
var playerIndex='players/player'+this.index
database.ref(playerIndex).set({
name:this.name, distance:this.distance

})
}

static getPlayerDetails(){
var playerInco=database.ref('player')
playerIncoRef.on('value',(data)>={
  allPlayer=data.val()
})

}




}