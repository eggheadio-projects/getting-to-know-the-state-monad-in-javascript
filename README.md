## 0x02 Substitute State Using Functions With A State Monad

We take a closer look at the `get` construction helper and see how we can
use it to lift a function that maps the state portion and updates the resultant
with the result. Using `get` in this fashion, we then demonstrate how we can
make accessors that can then be extended to create more complex interactions.

As there are times that we only want to pull the resultant for a given
computation, we take a look at running our instances with the `evalWith` method.
`evalWith` will run our computations, throwing away the state, returning the
resultant.

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

[4]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x02-get-sub-state/plnkr?show=script.js,preview
[5]: https://egghead.io/lessons/egghead-substitute-state-using-functions-with-a-state-monad/edit
