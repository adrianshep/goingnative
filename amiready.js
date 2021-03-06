


/*

$ goingnative verify
✓ Found usable `node` version: v6.12.0
✓ Found usable `gcc` in $PATH: v6.0.0
✓ Found usable `python` in $PATH: v2.7.5
✓ Found usable `node-gyp` in $PATH: v3.6.2
Running `node-gyp`, this may take a few minutes if it hasn't been run before...
  CXX(target) Release/obj.target/test/test.o
  SOLINK_MODULE(target) Release/test.node
✓ Compiled test package
✓ Found compiled test binding file
✓ Test binding file works as expected

# PASS

Your solution to AM I READY? passed!

AM I READY?
 Exercise 1 of 8

──────────────────────────────────────────────────────────────────────

## Task

Prepare your development environment for native Node.js add-ons

──────────────────────────────────────────────────────────────────────

## Description

To pass this exercise you simply need to have a development environment with all
the required tools installed.

You need:

A recent and stable version of Node.js: unstable releases are not tested with
this workshop and should be avoided. Visit [http://nodejs.org/](http://nodejs.org/)
to download a new version or use your local package manager to upgrade.

A compiler: specifically, a (non-ancient) C++ compiler, we will require gcc or
LLVM gcc on OS X. Use your native package manager to install build tools
including gcc.

Python: version 2.7.x is preferred for use by GYP, a build generation tool used
for configuring and compiling Node.js add-ons. Download from
<https://www.python.org/download/releases/2.7.7> or use your package manager.

node-gyp: a recent version installed globally with sudo npm install node-gyp -g.
node-gyp wraps GYP and produces builds specifically targeted for Node.js.
Install with sudo npm install -g node-gyp.

If you are unsure, simply run goingnative verify and we'll tell you what versions
you have.

──────────────────────────────────────────────────────────────────────

 » To print these instructions again, run: goingnative print
 » To verify you have the correct environment, run: goingnative verify
 » For help run: goingnative help

*/
