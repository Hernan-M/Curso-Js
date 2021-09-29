const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const article= require("./data")

server.listen(5000, function(){
    console.log("server is running")
})

server.use(express.static('publics'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about ={
        avatar_url:"https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg",
        name:"Rocketseat",

        //list
        first:"JavaScript",
        second:"HTML",
        third:"CSS",

        links: [
            {icon: "fab fa-github", url :"https://github.com/rocketseat-education"},
            {icon: "fab fa-instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
            {icon: "fab fa-facebook-square", url:"https://www.facebook.com/rocketseat/"}
        ]
    }

    return res.render("about", {about:about})
})

server.get("/content", function(req, res){
    return res.render("content", { items: article })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });