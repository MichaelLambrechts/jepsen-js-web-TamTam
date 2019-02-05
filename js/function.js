const showdown  = require('showdown');
const fs = require('fs');
let converter = new showdown.Converter();

//@þaram = string in markdown toConvert  @return = markdown converted in html
function convertToHtml(toConvert){
  let toRet = "";
  toRet += converter.makeHtml(toConvert);
  return toRet;
}

//load file 'ideaList.md' to convert it to html and print it on the page.
function loadFile() {
  let obj, toRet = "";

  obj = fs.readFileSync('ideaList.md', 'utf8');
  toRet += converter.makeHtml(obj);
  return toRet;
}

document.querySelector(".blabla").innerHTML = loadFile();