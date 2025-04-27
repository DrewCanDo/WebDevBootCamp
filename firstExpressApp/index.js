const express = require('express');

const app = express();

app.use(() => {
  console.log('I just got a request from anywhere. post/get..idc');
});
//note that console. log requests go to the cli terminal

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
