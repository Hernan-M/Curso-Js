const express = require ('express')
const nunjucks = require ('nunjucks')

const server = express()
const article = require("./data")


server.listen('5000', function(){
    console.log("server is running")
})


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    console.log(article)
    return res.render("layout", {img: article.headerImage, cards: article.cards})
})

server.get("/about", function(req, res){
    return res.render("about", { })
})

server.get("/content", function(req, res){
    return res.render("content", {cards: article.cards})
})