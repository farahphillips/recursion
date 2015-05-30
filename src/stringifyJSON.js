// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// your code goes here

var stringifyJSON = function(obj) {
  var result = [];

  if (obj == null) {
    return "null";
  } else if (obj === undefined) {
    return undefined;
  } else if (typeof obj === "string") {
    return '"' + obj.toString() + '"';
  } else if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i])); 
    }
    return "[" + result + "]";
  } else if (typeof obj === "object") {
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && !(key == "functions") && !(key == "undefined")) {
          result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return "{" + result.toString() + "}";
  } else {
    return obj.toString();
  }
};