const fs = require("fs")


const lectureNames= ["lec -1" ,"lec-2 "," lec-3" ," lec-4" , "lec-5" ,"lec-6"]

// we need to create the folder for each one of them and make a readme file with written agenda on each of them..

for( let i=0 ; i<lectureNames.length ; i++){
    let currentFoldername = `lecture ${i+1}-${lectureNames[i]}`                   // first we have to create folder 
    fs.mkdirSync(currentFoldername)                                               // now making folders .
    console.log("created folders")

    let filePath= `${currentFoldername}/readme.md`                                // creating induviduls files
    fs.writeFileSync(filePath , "agenda")                                         // adding content to that files 

}