THIS READ ME:

This is a Dictionary for tearms that are taught.

ps- a double underscore __ is called a Dunder.

================ OBJECT PROTOTYPES:
Prototypes are the mechanism by which JS objects inherit features from one another.

There are tons of methods that have prototype in them.
example: Array.prototype.push();

all of the methods that are in an array are inside a property called:
__proto__: Array(0)
//(note that the __proto__ is a refrence in the created array to the Array OBJ.)

and array is in fact a js object. and every created Array has a refrence to the Array object.
this means that all of the methods in Array are inherited to all arrays!!
and all the methods are Prototypes!

if we didnt use Prototypes, then every single array would have to have its own method.
so in short it just makes everything work smoother and more efficent. 
(Prototypes are a template object)

cool note: you can create your own methods in the prototype and every Array or String that is apart
of that prototype will have the method!!

Example:
String.prototype.grumpus = () => alert("Go AWAY!");

every string will now have the grumpus method. haha.

Warning!!!!:
you can also overwrite what methods do in the prototype. so you have to be careful!