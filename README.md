# anonymous-chat-app
Simple chat application to understand Web-Socket using socket-io.js

Application to do chating in your local network. (people can use it in their office at their own risk).

To setup this application 

1. Install nodejs from https://nodejs.org/en/download/

2. Go to your project location from command prompt and type
    app-start.bat <port> <proxy>
    
    <port> default is 3333
    <proxy> is optional
    
    e.g.  "app-start.bat 3333"

    The above command is without proxy. If you are using it behind proxy then your command will look like
          "app-start.bat 3333 http://my-network-proxy.com:port-of-my-proxy"

    If you enter port apart from 3333 you need to do same change in chat.js file.

    