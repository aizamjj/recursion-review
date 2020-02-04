// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var result = [];
  node = node || document.body;

  if (node.classList) {
    if (node.classList.contains(className)) {
      result.push(node);
    }
  }

  if (node.childNodes) {
    node.childNodes.forEach(function(element) {
      var childResult = getElementsByClassName(className, element);
      result = result.concat(childResult);
    });
  }

  return result;
  // your code here
};
