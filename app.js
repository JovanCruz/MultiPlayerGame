var io = require('socket.io')(process.env.PORT||5000);

var PlayerCount = 0;

console.log("Server Running");

io.on('connection', function(socket){
    console.log("Connected to Unity");

    socket.broadcast.emit('spawn');
    PlayerCount++;

    for(var i = 0; i < PlayerCount; i++){
        socket.emit('spawn');
        console.log("sending spawn to new player");
    }
    
    socket.on('sayhello', function(data){
        console.log("Your Unity Game says Hello");
        socket.emit('talkback');
        
    });

    socket.on('disconnect', function(){
        console.log("Player Disconnected")
    });

})