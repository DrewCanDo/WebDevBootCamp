THE reason we need to know these are to move around with node and run certian files.
UNIX Commands

==================Notes for Mastering the Terminal
the Terminal is an application and the shell. 
bash / zshell..etc is  the software.
----ls:
stands for list and it shows you things like folders in your current location.
----- ~ :
this will take you back to you home directory. its very useful.
you start in the home directory on terminal start up.
----- pwd :
print working directory. 
it is like a compass, and will show where you currently are. (directory)
------ cd :
change directory.
it is how you move between folders. cd documents/
------ clear :
will clean up the console/terminal.
------ cd .. :
this is how you go back one directory. the double dots (..)

========= Relative Path :
This means that this path is in your current directory folder. (that you are in inside the terminal)
when you use ls. the path you are going to is in the current folder.

========= Absolute Path :
it is when you go into a folder that is not in your current directory.
you have to give more info when going into this new directory.
example /Users/ios-macbook/Documents
if we were in a photo directory. we go go striaght to the documents but sending
cd /Users/ios-macbook/Documents

NOTE: cd / goes to your root path. / is root
to go to the home directory use : cd ~

========= mkdir :
stands for make directory.
I just have to give it a name and it will create a new folder!
mkdir plants.

========= man :
it is short of manual.
after man you type a command like ls.
example: man ls

NOTE: type q to get out of manual.

======== flags :
they are like arguments in a function. they do different things on line of code
example of flags: -C -B -A -L
you can use man (command) to see a list of flags that work on it.

======= -v :
means verbose. it shows more info on what is running.

======= touch :
touch space filename with an extention
it makes a file for us.
touch bubs.html (makes a new html file)

========== rm / rmdir :
stands for remove. it is for deleteing files.
example: rm file.txt
rmdir will remove a directory/also known as a folder
note rmidr only works on empty folders
see -rf for removing when not empty

========= -rf :
r stands for recursive and f stands for force
its is a flag that lets us remove a directory/folder even if its not empty
example rm -rf folderOfPlants
use rm and not rmdir.
