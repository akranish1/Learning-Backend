
 const fs= require('fs');
// //writeFileSync(fileLocation,fileData);
// fs.writeFileSync("./test.txt", "Hello world from sync");        //it overwrite each time when it is used, not append;

// fs.writeFile("./test.txt", "Hello world from sync",(err)=>{});
// //writeFile(fileLocation,fileData,if error occurs);//Async

// //readFileSync(fileLocation, encoding);
// const res=fs.readFileSync("./test.txt","utf-8");//return in res
// console.log(res);

// //readFile(fileLocation, encoding,(error, storing obj));
// fs.readFile("./test.txt","utf-8",(err,res)=>{   //returned value is stored in res
//     if(err)
//     {
//         console.log("Error",err);
//     }
//     else
//         console.log(res);
// })

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt",`\nAppended at: ${Date.now()} `);

// fs.cpSync("./test.txt","./testCopy.txt");
// //copy of test.txt is created with the name of testCopy.txt;

//To delete that copied file:
// fs.unlinkSync("./testCopy.txt");
