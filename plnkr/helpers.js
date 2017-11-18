(function(root) {
  // add :: Number -> Number -> Number
  const add =
    x => y => x + y

  root.helpers = {
    add
  }
})(window)
