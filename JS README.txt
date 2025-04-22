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
example push() could be changed to an alert();

=================== OBJECT ORIENTED PROGRAMMING:
OOP has once main idea.
which is organizing our code,
designing and structuring our applications, by breaking things up into distinct patterns of objects.

=================== Factory Functions:
It is a function that creates Objects for you.
so you would create a function like normal and pass params into it.
then it would be set up to make an object.

=================== THIS keyword:
THIS returns what is to the left of the period (.)
Example:
    const color = {};
    color.r = red;
    color.func = () => { this.r } //this means that red will be returned. (arrow function implict return.)

================== Destructure:
Destructuring makes it easy to pull out key/values.
it looks like this: const {r,g,b} = colorObj;
its a quick way to use the r g b varaibles outside of the object.

================== Constructor Functions:
Constructor Function is the more commanly used. over the function factory.
-----NEW keyword----
the new operator is used to create a new object.
this is useful b/c when you use this syntax without new, it will refrence the window obj.
new will create a new obj and this will now refrence the new obj and not the window

EXAMPLE:
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b}`);
}

!!Attention. NEW is super important to create an obj and reference it!
//you create a new obj using:
const colorHolder = new Color(29, 0, 20);
//you can call rgb from any one now. as a prototype~
colorHolder.rgb();

!!IMPORTANT. DO NOT use arrow functions when you have a function that uses the THIS keyword.
it causes issues. google it for more info.

==========================JavaScript Classes:
Cleaner way of making Constructor Function.
Explained Example:
//keyword class is needed to create the new class. and the varaible must be Capitalized.
class Color {
    //constructor is a keyword that runs on creation. it is importanted and needed.
    constructor() {
        console.log('runs as soon as it is made!');
        this.r = r;
        this.b = b;
        this.g = g;
        //with the class syntax, all the methods are made as prototypes!!!!! EASY
        greet() = {
            return `Hello here is the r: ${this.r}`;
        }
    }
}

//you still need the new keyword when you create the class obj!
const c1 = new Color(2, 3, 4);

//SUMARRY. classes are the best thing to use if you need to create the same objs multiple times.

=======================Keyword Extends and Super:

--------Extends Explained Example:

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        returns `${this.name} is eating!`
    }
}

//Extend keywoards makes the Cat class a child class of the Pet class! it gets all the 
//things that the Pet class has. but it doesnt pass its own functions to other classes that extend the Pet class.
//they have to Extend the Cat class to get the Cat Class's methods!!
class Cat Extends Pet {
    meow() {
        return 'MEOOWWW!!';
    }
}

class Dog Extends Pet () {
    bark() {
        return 'WOOOOF!!';
    }
}

------SUPER:
the super() method calls the extended class's constructor.
It is called to still use Pet's constructor by passing in the varaible it needs!!
Explained Example:

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        returns `${this.name} is eating!`
    }
}

class Cat Extends Pet {
    //NEW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //the constructor was made for the Cat class and calls the super method to still use Pet's constructor!
    //also note that all the methods from Pet are still passed.
    constructor(name, age, lifeCount) {
        //
        super(name, age);
        this.lifeCount = lifeCount;
    }
    meow() {
        return 'MEOOWWW!!';
    }
}
