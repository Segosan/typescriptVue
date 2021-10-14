const Contact = require('../models/contacts')

//get all phones listed
exports.findAll = (req,res) => {
    Contact.find()
    .then(contact=> {
        res.json(contact)
    }).catch(err=>{
        res.status(500).json({
            message:  "Some error occurred while retrieving contacts"
        })
    })
}


//get phone listed by ID
exports.findById = (req,res) => {
    let id = req.params.contactId
    Contact.findById(id)
    .then(contact=> {
        res.json(contact)
    }).catch(err=>{
        res.status(500).json({
            message:  "Some error occurred while retrieving contacts"
        })
    })
}

//create a new entry
exports.create = (req,res) => {
   
    let newcontact = req.body
   
    let doc =  new Contact(newcontact)
    doc.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!")
        res.json({
            message: "Document inserted succussfully!"
        })
    });
}

//edit an existing entry
exports.edit = (req,res) => {
    let editcontact = req.body
    let id = req.params.contactId
    console.log(id)
    console.log(req.body)
    Contact.findByIdAndUpdate(id, editcontact)
    
    .then(contacts=> {
        res.json(contacts)
    })
    .catch(err => {
        res.json({
            message: "Document edited succussfully!"
        })
    })
}

//delete an existing entry
exports.delete = (req,res) => {
    let id = req.params.contactId
    console.log(req.body)
    Contact.findByIdAndRemove(id)
    .then(contact => {
        Contact.find()
        .then(contact=> {
            res.json(contact)
        }).catch(err=>{
            res.json({
                message:  "Some error occurred while retrieving contacts"
            })
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "Document edited succussfully!"
        })
    })

}