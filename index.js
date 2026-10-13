// express is a library in nodejs through which we have to write code smaller to make the server 
// npm is just like a playstore in android


// 1. type npm init -y command : it create a package.json file in the folder , it mentions all the libraries you used and gonna be using so others can see them directly
// 2. then install any package u want : npm i express

// go t0 to .gitignore

//came back
// syntax to remember
const express = require('express')
const app = express();


//server start 
//server is a special type of code which never stops
app.listen(3000,function(){                                              // here 3000 is the port and you have to pass the port 
    console.log("server is running at port 3000");
})

// you can run multiple server on machiene but on different ports and you can run only one server on one port .


// get request 
app.get("/post",getHandler)                                            // jab bhi koi get ki request lgayega "/post" route prr toh ye getHandler ko call lga dega

function getHandler(req,res){
    console.log("requets recieved")
    const postData = {
        id : '1',
        title : "bvedhbce",
        body : "fvgyefggvef"
    }
    res.status(200).json(postData)                                    // cmd to post the data 
}

// toh abb code mein chota change bhi karega toh tujhe terminal wapa s kholkr code ko run karna padta h soo we us enodemon for that 
// npm install --save-dev nodemon
// this created a devdependency which have nodemon which means dependency for only this project 
// now we will write the cmd nodemon index.js instead of node index.js  to run the program or server
// go to package.json and inside the script write "start":"nodemon index.js"  to start the server or program by typing mpn start 
 //  now we can write npm start then it will run the server or program 
 

