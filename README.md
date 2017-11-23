## 0x07 Apply Stateful Computations To Functions

When building our stateful computations, there will come a time when we’ll
need to combine two or more state transactions at the same time to come up
with a new result. Usually this occurs when want to use plain ol’ JavaScript
functions with two or more a arguments as part of our stateful computations.

We first look at how this can be accomplished by using `chain` and closure to
get access to both functions. Then we will explore how we can leverage the `of`
construction helper and the `ap` `State` instance method to clean this type of
interaction up a bit. We then conclude with an even cleaner approach that takes
full advantage of a `crocks` helper function named `liftA2`.

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

[4]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x07-combine-function/plnkr?show=script.js,preview
[5]: https://egghead.io/lessons/javascript-apply-stateful-computations-to-functions
