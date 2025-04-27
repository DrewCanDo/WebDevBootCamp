NPM:
========
NODE PACKAGE MANAGER
you can be very partecular on what is shared in node

If you use require to refrence a file, then you have to add ./ in front of the file.
there are things that are modules and do not need the ./. so this is for files.
Example:
    there is a math.js file that has variables and functions code below:
    const PI = 3.14;
    const add = (x, y) => x + y;
    const square = (x,x) => x * x;

    there is a app.js file that has the code below:
    const math = require("./math");
    console.log(math);

    note to run this you type in: node app.js
end

So, you cant just see anything in math. WHYYY???
b/c you have to pick what is exported. USing:
added to math.js:
module.exports.add = add;

now only add is sent over. you need module.exports or exports! yes you can only use exports, it is easier.
if you wanted to add PI as well then we would add the line:
module.exports.PI = PI; or exports.PI = PI;

now to call it in app.js we use:
added to bottom of list or replacing line console.log(math); with:
console.log(math.PI);

UPDATE:
you can destructure on the requrie call in app.js.
Example:
in app.js:
    const {PI, add} = require('./math');
    console.log(PI);
    conosle.log(add(1, 3));
end

now lets add an obj to the math.js file:
added to code is:
    const math = {
        add: add,
        PI: PI,
        square: square
    }

    exports = math;

You can also go right to export instead of assigning it to a variables
    exports.PI = 3.14 //this is using the short cut
IMPORTANT dont use exports = "changed exports variable"; this will make any other exports fail as the variable
is different!!!!!!
    modules.exports.add = (x,y) => x+y;
    modules.exports.square = x => x*x;
end

NPM: node package manager:
it is a library of tons and tons of packages. tools and code that ppl have written for free use.

you can go to this website to find more software to install via npm and require in the file. 
https://www.npmjs.com/

ps add sudo in front if you have permission errors when installing.

now the differences between local and global packages:
using npm install exampleColors, will install the package into just one directory.
This is really common to be installed locally for just one directory. 
That way the installed software doesnt have full rain to mess with everything.
as different code might user an older version of express.

To install an npm software package global, you have to use the g flag.
example: npm i -g cowsay
cowsay will be installed globally and can be called using:
cowsay JAVASCRIPT FTW

if something is downloaded locally you have to now link it to the file to use it locally. with require
example of linking: npm link cowsay
then you can use it in your code.

note that if you download files from get that use node packages you can download all that is used in the software using:
node install
it will look into the dependency files in the package.json file and download all that is listed there with the correct version.
wooooot

inside of the js file using process.argv[2] will pull out what you send from node on the cli
note that process.argv[0] is for the node executable path
process.argv[1] is the path to the JS file being run/executed 

