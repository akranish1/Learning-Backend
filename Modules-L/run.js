// const mathImport=require('./math');      //requier():way to import data of math.js |||| //if you want to import from node packages dont use './'
// console.log(mathImport.add(2,3));
// console.log(mathImport.sub(2,3));

//------------------------------------------------------------------

//2nd way:
const {add,sub}=require('./math');      //Destructuring,note:names should be same from what present in math.js file
console.log(add(2,3));
console.log(sub(2,3));