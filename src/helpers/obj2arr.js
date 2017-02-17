/**
    obj2arr.js

    @author:
      - Derek Johnston

    @desc:
      - Converts an object to an array.
*/
function obj2arr(obj) {
  if (typeof obj === "undefined") {
    throw "obj2arr was called without an object parameter.";
  } else if (typeof obj !== "object") {
    throw "obj2arr was called with an invalid parameter type (must be Object).";
  } else {
    let arr = [];
    for (const key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }
};

export default obj2arr;
