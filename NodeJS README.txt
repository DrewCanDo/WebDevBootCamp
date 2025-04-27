README FOR NODE.js

What is Node?
Ans: Node is a javascript runtime. it makes it so that you can execute
code outside of a web browser.
This means that you can use js to run server side code.
that way you dont have to rely on other langauges like python or ruby to do it.

What do people do with node??
-web servers
-command line tools
-native apps (VSCode is a node app!)
-Video Games
-Drone Software
-A whole lot more!

=== lets check to see if node is installed!
go to the cmd and type node.
it will tell you if it is found or not.

==== now lets install.
go to node's homepage and select the version that is right for the machine.

==== now when you type node
you are in the node repl.
to leave you need to type .exit

NOTE: there is no document or window in node.
the browser uses the window as the global scope.
node acctually uses global as the global scope.

=== you need to either be in the folder where you are running your js file.
note: example of how to run a js file with node.
example: node file.js

for the example to work you have to be in that directory or use the absolute path!

====== process & argv: process.argv
So this is very interesting. the process is apart of node and is always avaliable in the global scope
it is how you can pass things to your js file and back.

so a call like this from the node cli:
cli code: node greeter.js drew chicken
js file code: V
const args = process.argv.slice(2); //the slice is to cut off the node and greeter.js part of the array
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}

===== IMPORTANT NOTE: fs.writeFileSync Changes:
this is an updated version:

const fs = require('fs');
const folderName = process.argv[2] || 'Project';

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log("SOMETHING WENT WRONG!!");
    console.log(e);
}

====file system module crash course:
