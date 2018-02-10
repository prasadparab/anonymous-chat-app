var express=require("express");
var socket=require("socket.io");

var app=express();
var server=app.listen(process.argv[2]||3333,function(){
    "use strict";
	if(process.argv[2])
		console.log("\nlistening to request on port "+(process.argv[2]));
	else
		console.log("\nlistening to request on default port 3333");
});

app.use(express.static("public"));

var io=socket(server);

io.on("connection",function(socket){
    "use strict";
    console.log("made socket connection",socket.id);
    socket.on("chat",function(data){
        io.sockets.emit("chat",data);
    });
    socket.on("typing",function(data){
        socket.broadcast.emit("typing",data);
    });
});