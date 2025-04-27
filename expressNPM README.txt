express is a node package and it is a web development framework.

express has a bunch of methods and optional plugins, that we can use to build web applications and APIs.

express helps us start up a server to listen for incoming requests.
it also:
parses incoming requests
match those request to particular routes
craft our http responses and associated content.

note with a library, you are in control of where you want to use its code.
with a framwork, the control is inverted. which means it tells you where to plug/use the code.

first you need to install the express package using npm i express. 
make sure you are in the directory that you want it installed in.
now you need to require express. const express = require("express");
now you need to run express and store what is returned in a variable useing: const app =  express();

look at folder firstExpressApp for first express info

buttons control+C stop the server. so that we can restart it.

const express = require('express');

const app = express();

//now we you listen and a port number to run our server
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
//now when you run this in node it will pring what we logged.
//now you will notice that the server is not done in the cli, it is listening still.
//you can go to localhost:3000 and see that the server is running!

//cannot get /
//the above line is displayed now. this is b/c there is a server there but nothing to get.

//app.use(() => {
//    console.log("this is what is sent")})

//app.use is used to send something back no matter where it comes from. doesnt matter if it is a get or post request.

note that console. log requests go to the cli terminal

the whole point of ports that we can have different servers running at the same time!

now we need to know how to send a response back when the local host requests from our port number. 3000 or 8080