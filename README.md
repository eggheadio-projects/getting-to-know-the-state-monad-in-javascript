## 0x08 Refactor Stateful Code To Use A State Monad

When we start to accumulate functions that all work on a given datatype, we
end up creating a bunch of boilerplate code in almost every function to handle
the changes we need to make to our records’ values. This can lead to not only
undesirable boilerplate present in all of our functions, but also can cause us
to have to create variables just to manage our stateful changes.

We’ll take a look at a couple patterns that can act as early warning signs
that will eventually cause us to not have a good time. Once we know what the
smell is, we’ll look at how moving our computations into `State` can clean up
all of our state management code by making it the responsibility of `State`.
This allows our functions to only describe how state should change over time
versus us having to change it ourselves.

The lesson on egghead can be found [here][5]

### Requirements
This code example runs on a POSIX based system (Linux, OSX, etc) in a [nodejs][2] environment
requiring a version greater than `4.2.x` to be run. If you *have* to work in another environment,
this lesson also has a "plunk" hosted on [Plunker][3] that can be run in browser and can be found
here:

[Lesson Plunk][4]

### Using This Example
This code example and environment is provided on its own branch. To run this locally, just clone
this repository down, check out this branch and run the following commands:

#### Setup Your Dependencies
To setup the lesson, execute this command in the project folder:

```
$ npm run setup
```

#### Run The Code
Once all dependencies have been pulled down, you can then run the example code.

This code runs in a node environment and logs to the console that the code was run in. Once
started, the environment will listen to changes to the files and re-run the code. This allows
you to have immediate feed back to the changes you made. To exit out of the code example,
just press the keystroke `Ctrl+C`.

To run the lesson, execute the following in the project folder:

```
$ npm start
```

[1]: https://egghead.io/instructors/ian-hofmann-hicks
[2]: https://nodejs.org/
[3]: https://plnkr.co/

[4]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x08-refactor-state/plnkr?show=script.js,preview
[5]: https://egghead.io/lessons/javascript-refactor-stateful-code-to-use-a-state-monad
