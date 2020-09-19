class Player{
    constructor(){

    }
getCount(){
    var pcref = database.ref('playerCount')
    pcref.on("value",function(data){
        playerCount = data.val()
    })
}

}