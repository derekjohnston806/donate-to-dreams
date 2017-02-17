/**
    generateDataModelIDString.js

    @author:
      - Derek Johnston

    @desc:
      - given an array of strings, format them to be a usable id string.

    @param:
      - strings (Array): The array of strings.

    @return:
      - A string that may be used as an array.
*/
function generateDataModelIDString(strings) {
  let idString = "";
  for (let i = 0; i < strings.length; i += 1) {
    let rawString = strings[i].replace(" ", "_");
    idString += "_" + rawString;
  }
  return idString;
}

export default generateDataModelIDString;
