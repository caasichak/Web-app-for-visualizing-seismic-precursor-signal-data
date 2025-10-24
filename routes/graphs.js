var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
/*GET home page */
// router.get('/', function(req, res, next){
//     res.render('graphs', { title: 'Express'});
// });
var db;
//const port = process.env.PORT || 9000;
mongoose.connect('', function(err, database){
    if (err) return console.log(err);
    db=database;
    //app.listen(port, ()=> console.log('sever listening on port',port));
});


router.get('/', function(req, res, next){

    res.render('graphs', { title: 'Express'});
    
});


function formulario (){
    var Fechaform = document.getElementsByName("Fecha");
    var Grafica1 = document.getElementsByName("electrom").value;
    var Grafica2 = document.getElementsByName("acustica").value;
    var Grafica3 = document.getElementsByName("Geo").value;
    console.log(Fechaform,Grafica1,Grafica2,Grafica3);
    //return Fechaform;
    
    }

module.exports = router;
