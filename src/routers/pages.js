const express = require('express')
const router = new express.Router()

router.get('', (req, res)=>{
    res.render('index', {
        title: 'Svetlana Kharlamova',
        
    })
})

router.get('/blog', (req, res)=>{
    res.render('blog', {
        title: 'Blog'
    })
})

router.get('/school', (req, res)=>{
    res.render('school', {
        title: 'School'
    })
})

router.get('/gallery', (req, res)=>{
    res.render('gallery', {
        title: 'Gallery'
    })

})

router.get('/contacts', (req, res)=>{
    res.render('contacts', {
        title: 'Contacts'
    })
})



module.exports = router