The entire application is contained in the root directory 

To Run the app locally -> Run npm install after pulling the code 

To start the app -> Run npm start dotenv file contains a variable called DB_URI which is assigned to mongoDb connection string

The api base url is https://zuri-stage3.onrender.com/api 

To create a person -> 

    Request url : https://zuri-stage3.onrender.com/api/create 
    Request method: post Request header : 'Accept: application/json' 
    Request body : { "name":"your name", "email":"valid email", "age":"your age" } 
    Response : {message:"Person created successfully"}

To Read all people created to see thier id -> 

    Request url : https://zuri-stage3.onrender.com/api/people 
    Request method: get 
    Request header : 'Accept: application/json' 
    Response : {message:[]}

To Read the person created -> 

    Request url : https://zuri-stage3.onrender.com/api/id 
    Request method: get 
    Request header : 'Accept: application/json' 
    Response : {message:{}}

To update person -> 

    Request url : https://zuri-stage3.onrender.com/api/id 
    Request method: put 
    Request header : 'Accept: application/json' 
    Response : {message:{}}

To delete person ->

    Request url : https://zuri-stage3.onrender.com/api/id 
    Request method: delete 
    Request header : 'Accept: application/json' 
    Response : {message:{}}