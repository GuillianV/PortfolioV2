//---------------Gestion des imports
let express = require("express")
let app = express()

let http = require("http");
let server = http.Server(app)


app.use(express.static(__dirname + "/public-parcel/dist"))
app.use(express.static(__dirname + "/public-parcel"))


//-----------------GEstion des paths
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public-parcel/html/index.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public-parcel/html/about.html")
})
// Listen on port 8080
app.listen(8888);