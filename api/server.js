let express = require('express');
var mongoose = require('mongoose')
const path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
require('dotenv').config()

//before all route definitions
app.use(cors({origin: '*'}));

// All other GET requests not handled before will return our VUE app
app.get('/.*/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../app/public/', 'index.html'));
});

var apiRoutes = require('./routes/api-routes')


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
})
app.use(express.static(path.join(__dirname, '../app/build')));

app.use('/api',apiRoutes);

const uri = process.env.DB_URI

try{
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },function (err) {
        if (err) throw err;
        console.log('Successfully connected');
        
    });
}
catch(err){
    console.log(err)
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('App is running, server is listening on port 3000');
});



