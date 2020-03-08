const express = require('express')
const hbs = require('hbs')
const path = require('path')
require ('./db/mongoose')
const pagesRouter = require('./routers/pages')
const postRouter = require('./routers/post')
const userRouter = require('./routers/user')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.use(pagesRouter)
app.use(postRouter)
app.use(userRouter)

app.listen(port, ()=>{
    console.log("Server is on port " + port)
})
