


/*

MISSION POSSIBLE: PART TWO
 Exercise 3 of 8

──────────────────────────────────────────────────────────────────────

## Task

Create a JavaScript file for your native add-on package that loads and executes
the compiled module.

──────────────────────────────────────────────────────────────────────

## Description

In this exercise, you simply need to create an index.js file inside the add-on
package directory you submitted in the previous exercise.

### Mission: write an index.js

You will always need a small amount of JavaScript glue for a native add-on to
tell Node.js where the add-on binary is located for loading (via require()) and to then either expose the add-on via exports or perform some internal work with the add-on.

For this exercise, the add-on C++ code we will be building will expose a method
named print(). We are using the bindings library to simplify the locating and
loading of the compiled binary. Load your add-on module with:

    var bindings = require('bindings')
    var addon = bindings('modulename')

Where modulename is the name in your binding.gyp.

The loaded addon will behave like any normal Node.js module, so you can fetch
properties from it, call methods on it, and anything else you are used to doing
with a Node.js module.

Aside from loading the addon, you also need to call its addon.print() method.

──────────────────────────────────────────────────────────────────────

## Conditions

Your submission will be tested against a working native add-on to determine if
your JavaScript works. You must call the print() function exposed by the working
add-on.

──────────────────────────────────────────────────────────────────────

 » To print these instructions again, run: goingnative print
 » To compile and test your solution, run: goingnative verify myaddon
 » For help run: goingnative help

*/
