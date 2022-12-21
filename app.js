// const fs=require('fs');
// const util = require('util');
// const readPromise = util.promisify(fs.readFile);
// const writePromise = util.promisify(fs.writeFile);
// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// const start=async ()=>{
//     try{
//         const text=await readPromise('./content/first.txt','utf-8');
//         const second=await readPromise('./content/second.txt','utf-8');
//         await writePromise('./content/write.txt',"file data written",'utf-8');
//         console.log(text,second);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// start();
const 