(function(root) {
  
  const compose =
    (f, g) => x => f(g(x))
  
  root.helpers = {
    compose
  }
})(window)