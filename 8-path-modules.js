const path = require('path');

//return the separator of the path
console.log(path.sep)

//join the paths to a folder
const filePath = path.join('/content','subfolder','text.txt');
console.log(filePath);

const filePath1 = path.resolve('content','subfolder','text.txt');
console.log(filePath1);