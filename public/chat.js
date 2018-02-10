var socket=io.connect("http://localhost:3333");

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