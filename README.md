## 0x04 Modify The State Of A State Monad

Using `put` to update our state for a given state transaction can make it
difficult to modify a given state based on its previous value. In this
lesson we will explore a means to lift specialized functions that can be
used modify our state’s value. These specialized functions must have the
same type in their input and output. We take a look at a construction helper
named `modify` that is used to remove the boilerplate of this type of construction.

We also start to see how we can extend simple discrete stateful transactions to
create other stateful transactions.

The lesson on egghead can be found [here][5]

### Requirements
This code example runs on a POSIX based system (Linux, OSX, etc) in a
[nodejs][2] environment requiring a version greater than `4.2.x` to be run. If
you *have* to work in another environment, this lesson also has a "plunk"
hosted on [Plunker][3] that can be run in browser and can be found here:

[Lesson Plunk][4]

### Using This Example
This code example and environment is provided on its own branch. To run this
locally, just clone this repository down, check out this branch and run the
following commands:

#### Setup Your Dependencies
To setup the lesson, execute this command in the project folder:

```
$ npm run setup
```

#### Run The Code
Once all dependencies have been pulled down, you can then run the example code.

This code runs in a node environment and logs to the console that the code was
run in. Once started, the environment will listen to changes to the files and
re-run the code. This allows you to have immediate feed back to the changes
you made. To exit out of the code example, just press the keystroke `Ctrl+C`.

To run the lesson, execute the following in the project folder:

```
$ npm start
```

[1]: https://egghead.io/instructors/ian-hofmann-hicks
[2]: https://nodejs.org/
[3]: https://plnkr.co/

[4]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x04-modify-state/plnkr?show=script.js,preview
[5]: https://egghead.io/lessons/egghead-modify-the-state-of-a-state-monad
