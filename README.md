## Getting To Know The State Monad on `egghead.io`

Dealing with stateful computations can be a challenge when writing purely functional JavaScript.
They can result in undesired variable declaration at best and boilerplate state management code
in every function dependent on the state at its worst.

In this course we will explore a well know Algebraic Data Type named State, that is built from
the ground up to address these :corn:cerns. While this course will be focused around a State
implementation provided by a library named [`crocks`](https://www.npmjs.com/package/crocks),
a majority of the techniques we learn here can be used with most of the State implementations
in the wild.

This is the main repository that houses all the code examples from the lessons I have done on
[egghead.io][1] for the course "Geeting to Know The State Monad in Javascript". Every lesson
has its own branch that includes all the source code from the lesson, usually including
additional bits to further expand on the topic at hand.

### Included Lessons

| Title | Egghead Lesson | Plunker | Branch |
|-------|----------------|---------|--------|
| Construct a Stateful Monad | [video lesson][4] | [plunk][5] | [github][6] |
| Map And Evaluate State With A Stateful Monad | [video lesson][7] | [plunk][8] | [github][9] |
| Substitute State Using Functions With A State Monad | [video lesson][10] | [plunk][11] | [github][12] |
| Update The State Of A State Monad | [video lesson][13] | [plunk][14] | [github][15] |
| Modify The State Of A State Monad | [video lesson][16] | [plunk][17] | [github][18] |
| Combine Stateful Computations Using A State Monad | [video lesson][19] | [plunk][20] | [github][21] |
| Combine Stateful Computations Using Composition | [video lesson][22] | [plunk][23] | [github][24] |
| Apply Stateful Computations To Functions | [video lesson][25] | [plunk][26] | [github][27] |
| Refactor Stateful Code To Use A State Monad | [video lesson][28] | [plunk][29] | [github][30] |

### Requirements
These code examples run on a POSIX based system (Linux, OSX, etc) in a [nodejs][2] environment
requiring a version greater than `4.2.x` to be run. If you *have* to work in another environment,
each lesson also has a "plunk" hosted on [Plunker][3] that can be run in browser.

### Using These Examples
All code examples and environments are provided on there own branch, named after the lesson it
goes with. After pull this repository down, just checkout the branch you are interested in and
run the following commands:

#### Setup Your Dependencies
Different lessons may require different environments and dependencies. Some lessons are just run in node, while others run in the browser with a "poor man's build system". These lessons include an npm script to manage the dependencies for the specific lesson. To setup the lesson, execute this command in the lessons folder:

```
$ npm run setup
```

#### Run The Examples
Once all dependencies have been pulled down, you can then run the examples with another npm script. How the results are viewed varies from lesson to lesson, so check each lesson's `README.md` to see how the results are viewed.

When running the examples, they will continue to run, listening to changes in your files. Once one of the files change, it will re-run/recompile script. When you are done playing with the code, you can quit the example with `ctrl+c` to get back to your prompt.

You can run the examples by calling the following:

```
$ npm start
```

[1]: https://egghead.io/instructors/ian-hofmann-hicks
[2]: https://nodejs.org/
[3]: https://plnkr.co/

[4]: https://egghead.io/lessons/javascript-construct-a-stateful-monad
[5]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x00-construction/plnkr?show=script.js,preview
[6]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x00-construction

[7]: https://egghead.io/lessons/javascript-map-and-evaluate-state-with-a-stateful-monad
[8]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x01-map-and-eval/plnkr?show=script.js,preview
[9]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x01-map-and-eval

[10]: https://egghead.io/lessons/javascript-substitute-state-using-functions-with-a-state-monad
[11]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x02-get-sub-state/plnkr?show=script.js,preview
[12]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x02-get-sub-state

[13]: https://egghead.io/lessons/egghead-update-the-state-of-a-state-monad
[14]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x03-put-and-exec/plnkr?show=script.js,preview
[15]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x03-put-and-exec

[16]: https://egghead.io/lessons/egghead-modify-the-state-of-a-state-monad
[17]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x04-modify-state/plnkr?show=script.js,preview
[18]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x04-modify-state

[19]: https://egghead.io/lessons/egghead-combine-stateful-computations-using-a-state-monad
[20]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x05-combine/plnkr?show=script.js,preview
[21]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x05-combine

[22]: https://egghead.io/lessons/javascript-combine-stateful-computations-using-composition
[23]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x06-compose-computations/plnkr?show=script.js,preview
[24]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x06-compose-computations

[25]: https://egghead.io/lessons/javascript-apply-stateful-computations-to-functions
[26]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x07-combine-function/plnkr?show=script.js,preview
[27]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x07-combine-function

[28]: https://egghead.io/lessons/javascript-refactor-stateful-code-to-use-a-state-monad
[29]: https://embed.plnkr.co/github/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/0x08-refactor-state/plnkr?show=script.js,preview
[30]: https://github.com/eggheadio-projects/getting-to-know-the-state-monad-in-javascript/tree/0x08-refactor-state
