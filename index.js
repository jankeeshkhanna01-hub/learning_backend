// express is a library in nodejs through which we have to write code smaller to make the server 
// npm is just like a playstore in android


// 1. type npm init -y command : it create a package.json file in the folder , it mentions all the libraries you used and gonna be using so others can see them directly
// 2. then install any package u want : npm i express

// go t0 to .gitignore

//came back
// syntax to remember
const express = require('express')
const app = express();
const fs = require("fs");

const content = fs.readFileSync("./posts.json","utf-8")               // reading data through file 
const jsonPost = JSON.parse(content)                                      // to wrap in json format always had to write 


//server start 
//server is a special type of code which never stops
app.listen(3000,function(){                                              // here 3000 is the port and you have to pass the port 
    console.log("server is running at port 3000");
})

// you can run multiple server on machiene but on different ports and you can run only one server on one port .


// getall post  request 
app.get("/post",getHandler)                                            // jab bhi koi get ki request lgayega "/post" route prr toh ye getHandler ko call lga dega

function getHandler(req,res){

    res.status(200).json(jsonPost)                                    // cmd to post the data 
}

// toh abb code mein chota change bhi karega toh tujhe terminal wapa s kholkr code ko run karna padta h soo we us nodemon for that 
// npm install --save-dev nodemon
// this created a devdependency which have nodemon which means dependency for only this project 
// now we will write the cmd nodemon index.js instead of node index.js  to run the program or server
// go to package.json and inside the script write "start":"nodemon index.js"  to start the server or program by typing mpn start 
 //  now we can write npm start then it will run the server or program 

// above code return all the posts but what if we wnt only one post 

// route -> /post/:userID 

//get a post 

app.get("post/:postId",getPostbyId)

    function getPostbyId(req,res){
try{

    const postid =  req.params.postId;                                        // params is impo in here 
    console.log("postID:",postid)                                            // this will return the only post which have that particular post id we pass it by /post/1 in the link
    const postsArr = jsonPost.post
    for (let i = 0 ; i<postsArr.length ; i++){
        if(postsArr[i]==postid){
            return res.status(200).json({
                postid
                    })

        }
    }
    res.status(404).json({
        post: "post not found"                                                    
    })  
}catch(err){
    req.status(500).json({
        response:"something went wrong"                // this is to tell that the failure is in our code 
    })
}
    }


// code ko himesha try nd catch ke andar hii likhna h -- make it a habit 


// post request 
app.post("/post",createPost)

function createPost(req,res){
    try{
        console.log("req.body:", req.body)                                                            // jo content frontend se aata h voh req.body mein aata h 
            const postArr = jsonPost.post;
            postArr.push(req.body)
        
        res.status(201).json({                                                                          //use post man for the post request simply download it and dont sign in enter ur url and go to body and then select raw and then select json then send post and it will show post craeted or any other message u see            message : "post created "
        message : "post created" 
        })
    }catch(err){
        res.status(500).json({
            response : "something went wrong"
        })

    }

}





// update post 
app.patch("/post",updatePost)

function updatePost(){
    try {
        const postid = req.params.postId;        // which post to update
        const updatedData = req.body;            // new data sent by the client
        console.log("postID:", postid)
        const postsArr = jsonPost.post

        for (let i = 0; i < postsArr.length; i++) {
            if (postsArr[i].id == postid) {
                // merge the old post with the new data
                postsArr[i] = { ...postsArr[i], ...updatedData }                                    //2. { ... } (curly braces)
                                                                                                   //This creates a brand new object. Inside it, you list what should go into that object.
                return res.status(200).json({
                    message: "post updated",
                    post: postsArr[i]
                })
            }
        }

        return res.status(404).json({
            post: "post not found"
        })
    } catch (err) {
        return res.status(500).json({
            response: "something went wrong"     // failure is in our code
        })
    }

}


//delete post 
app.delete("/post/:postId",deletePost)

function deletePost(){
     try {
        const postid = req.params.postId;        // which post to delete
        console.log("postID:", postid)
        const postsArr = jsonPost.post

        for (let i = 0; i < postsArr.length; i++) {
            if (postsArr[i].id == postid) {
                // remove 1 item at index i
                const deletedPost = postsArr.splice(i, 1)[0]                            //postsArr.splice(i, 1) removes 1 item starting at index i. It modifies the original array in place and returns a new array containing the removed items. Since we removed only one, we take [0] to get that single post object, so we can send it back in the response.

                return res.status(200).json({
                    message: "post deleted",
                    post: deletedPost
                })
            }
        }

        return res.status(404).json({
            post: "post not found"
        })
    } catch (err) {
        return res.status(500).json({
            response: "something went wrong"     // failure is in our code
        })
    }

}