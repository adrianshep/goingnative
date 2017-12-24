


/*

OFFLOADING THE WORK
 Exercise 8 of 8

──────────────────────────────────────────────────────────────────────

## Task

Your effort on passing the previous exercise is to be congratulated. However,
you've created a bug! You're blocking the JavaScript thread so nothing else can
be done in your application.

Your task now is to move the sleep off onto a worker thread so that the
JavaScript thread doesn't block and can continue with its work. You still need
to delay the callback for the correct amount of time!

──────────────────────────────────────────────────────────────────────

## Description

The usleep() and Sleep() functions put the current thread to sleep so nothing
else executes. For your add-on, this also includes the whole JavaScript/V8 and
Node.js execution environment. This isn't acceptable for a Node.js application
that should never block.

In your working directory we have given you a new file named index.js that you
can use to replace the index.js file from your previous solution.

This new JavaScript code will create an interval timer to print a . to standard
out every 50ms. It will also print out Waiting at the start but the code to
print this is called after the call to your add-on. This will demonstrate just
how broken your code is.

Run your code and you will likely see it print this:

    Done!
    Waiting

What the code should be doing, and what you need to achieve, is this, without
changing any JavaScript:

    Waiting..........................Done!

## Worker threads

Node.js spins up 4 worker threads (by default) in a thread-pool for handling
file system I/O. In our C++ code we can easily make use of this thread-pool to
offload work from the JavaScript thread. Your task is to get the usleep() or
Sleep() to run on a worker thread and then have the callback fire from within
the JavaScript thread.

Thankfully NAN makes this a little easier than it otherwise would be to achieve.

We have also given you a new file myaddon1.cc in your current working directory
that has a basic structure you can use. It defines a MyWorker C++ class that
extends the Nan::AsyncWorker class that NAN uses to define a discrete chunk of
asynchronous work.

To use your worker class, wrap up a standard V8 Local<Function> in a
Nan::Callback object. This protects the callback from garbage collection and
exposes a simple Call() method that replaces the need to use Nan::MakeCallback().

To use MyWorker and Nan::Callback you need to allocate memory on the "heap" for
them by using the new operator. NAN will perform clean-up of both objects for
you so you don't need a matching delete in this case as you normally would in C++.

Things you need to do:

  * Wrap your `Local<Function>` in a `Nan::Callback` with:
    `Nan::Callback* nanCallback = new Nan::Callback(callback);`

  * Create a `MyWorker` and pass it the `nanCallback` and your amount of timer
  `delay` with `MyWorker* worker = new MyWorker(nanCallback, delay);`

  * Submit `worker` to the thread-pool with `Nan::AsyncQueueWorker(worker);`
  After this you can return as normal and the asynchronous work will be
  performed when there is a spare thread for it.

  * Put your `usleep()` / `Sleep()` logic into the `MyWorker`s `Execute()` method.

──────────────────────────────────────────────────────────────────────

## Conditions

Your submission will be compiled using node-gyp rebuild and executed with
node . x, where x is an integer representing the number of milliseconds to sleep.
Your code will be timed to ensure an appropriate amount of time has delayed
before the program exits. Standard output will be checked for "Waiting......Done!"
(with an appropriate number of . characters. Your code will be checked to ensure
that the C++ code is performing the sleep and that it is performed asynchronously.

──────────────────────────────────────────────────────────────────────

 » To print these instructions again, run: goingnative print
 » To print additional learning material relating to these instructions, run: goingnative more
 » To compile and test your solution, run: goingnative verify myaddon
 » For help run: goingnative help

*/
