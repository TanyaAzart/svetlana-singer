const express = require('express')
const hbs = require('hbs')
const path = require('path')
require ('./db/mongoose')


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

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Svetlana Kharlamova',
        
    })
})

app.get('/blog', (req, res)=>{
    res.render('blog', {
        title: 'Blog'
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title: '404 page',
        message: 'Page not found'
    })
})

app.listen(port, ()=>{
    console.log("Server is on port " + port)
})
