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
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
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
//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

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
    console.log(err + "h")
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('App is running, server is listening on port 3000');
});



