//---------------Gestion des imports
let express = require("express")
let app = express()

let http = require("http");
let server = http.Server(app)

let gitignore = require("./modules/gitignore.js")

// let { Pool, Client } = require('pg');
// let myDatabase = require("./modules/databaseConnect.js")

app.use(express.static(__dirname + "/public-parcel/dist"))
app.use(express.static(__dirname + "/public-parcel"))


//-----------------GEstion des paths



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public-parcel/html/index.html")
})

app.get("/fr", (req, res) => {
    res.sendFile(__dirname + "/public-parcel/html/index.html")
})

app.get("/en", (req, res) => {
    res.sendFile(__dirname + "/public-parcel/html/index.html")
})


app.get("/about/:lng", (req, res) => {
    PrepareBasicRoutes(req,res,"about")
})

app.get("/skills/:lng", (req, res) => {
    PrepareBasicRoutes(req,res,"skills")
})

app.get("/projects/:lng", (req, res) => {
    PrepareBasicRoutes(req,res,"projects")
})

app.get("/contact/:lng", (req, res) => {
    PrepareBasicRoutes(req,res,"contact")
})



app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + "/public-parcel/html/404.html");
});


// Listen on port 8888
app.listen(gitignore.listenPort, function(){
    console.log("Listening at port : "+gitignore.listenPort)
});



//Preparing routes
function PrepareBasicRoutes(req,res,htmlFile){
    if(req.params.lng != "fr" && req.params.lng != "en"){
        res.status(404).sendFile(__dirname + "/public-parcel/html/404.html");
    }else{
        res.sendFile(__dirname + "/public-parcel/html/" + htmlFile+".html")
    }
}


