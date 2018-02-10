# anonymous-chat-app
Simple chat application to understand Web-Socket using socket-io.js

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

    On successful you will get the message on command prompt something as "listening to request on..."

3. On same PC, from browser goto http://localhost:3333
   You can open multiple tabs to test/check application.
   Your friend can access your application using your ip address. Enjoy chatting !!! 

Application to do chating in your local network. (people can use it in their office at their own risk).