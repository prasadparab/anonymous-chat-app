var remote_server = prompt("Please enter your server address with port", "http://");

var socket=io.connect(remote_server);

$("#handle").focus();

var btn=$("#send"),
    handle=$("#handle"),
    message=$("#message"),
    output=$("#output"),
    feedback=$("#feedback");

btn.on("click",function(){
    "use strict";
    socket.emit("chat",{
        message:message.val(),
        handle:handle.val()
    });
    message.val("");
});
$(document).keypress(function(event){
    "use strict";
    var keycode = (event.keyCode ? event.keyCode : 0);
    if(keycode === 13){
		btn.trigger("click");
	}
});
message.on("keypress",function(){
    "use strict";
    socket.emit("typing",handle.val());
});
socket.on("chat",function(data){
    "use strict";
    feedback.html("");
    output.html(output.html()+"<p><strong>"+data.handle+"</strong>"+data.message+"</p>");
});
socket.on("typing",function(data){
    "use strict";
    feedback.html("<p><em>"+data+" is typing...</p></em>");
});