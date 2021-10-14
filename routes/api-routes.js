const http = require('http');
const fs = require('fs');
var bodyParser = require('body-parser')

let router = require('express').Router()

let contacts = require('../controllers/contacts.js')

router.get('/contacts', contacts.findAll)

router.get('/contacts/:contactId', contacts.findById)

router.post('/contacts', contacts.create)

router.put('/contacts/:contactId', contacts.edit)

router.delete('/contacts/:contactId', contacts.delete)

router.get('/ping', function(req, res) {
    res.send('pong');
})

module.exports = router