// operations in file :
// koi bhi feature chaiye toh module require(import ) krna padega .
// fs module is use to do anything to do possible with file and folder .

const fs=require("fs");                              // you have to write this if you have to use fs module.

// file system mein joo bhi feature krna h uske liye fs mein koi na koi function hoga.
// file -> read , write , update, delete , create .
// folder -> content check , update , delete .


// 1. file writting : (synchronus version )
// let whereTocreateFile = "file.txt"                   // where to create the file  // this is to create file inside this folder. // file creation .
// let content = "content added through nodejs"         // adding content to file
// console.log("adding content ")                        
// fs.writeFileSync(whereTocreateFile,content);         // fs module funnction for writing in the file.
// console.log("added content");


// nodejs mein by deafault all functions are asyncronus 



    // (asynchronus version )
//     console.log("before")

// fs.writeFile(whereTocreateFile,content, function(err,data){
//     if(err){
//         console.log("something is wrong")
//     }                                                      // here before and after will print first and then when data is colllected then print data 
//     else{
//         console.log("file is written comfortably")
//     }
// });    

//     console.log("after")






// 2. file reading 


// const content = fs.readFileSync(whereTocreateFile, "utf8")
// console.log("content:", content)




//3. append data into file :

// fs.appendFileSync(whereTocreateFile,"append data ")







/*************************************  folders here called directories********************************************** */

//creating folder 

// console.log("creating folder")
// fs.mkdirSync("backend-1")                              // use to create flder 
// console.log("folder created ")



// folder deletion 

// console.log("deleting folder")
// fs.rmdirSync("backend-1")                               // use to delete the folder 
// console.log("folder deleted ")








