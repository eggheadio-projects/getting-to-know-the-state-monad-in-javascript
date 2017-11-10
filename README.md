## 0x01 Map and Evaluate State With A State Monad

We explore our first stateful transaction, by devising a means to echo our
state value into the resultant for independent modification. With our state
value in the resultant, we explore using `map` to lift functions into our
type as a means to modify the resultant.

In our exploration we find that not only can we change values of the
resultant, but we can change the type as needed. We also find that we can
combine subsequent map calls into function compositions, allowing us to
clean up our code and combine our mappings to avoid excessive interactions
with our `State` datatype.

To wrap it all up, we take a look at a handy `State` construction helper
called `get` that we can use to query the state into resultant. This allows
to read from our state for computations that are based on the value of a given
state.

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

[4]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x01-map-and-eval/plnkr?show=script.js,preview
[5]: https://egghead.io/lessons/javascript-map-and-evaluate-state-with-a-stateful-monad
