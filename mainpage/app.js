const express = require('express');
const app = express();

const port = 4040;
app.set('view engine','ejs');
app.set('/view','views');
app.use('/static',express.static(__dirname + '/static'));

app.get('/',function(request,response){
    response.render('index');
});

app.get('/index/slidebook',function(request,response){
    response.render('register');
});

app.get('/index', function(req, res) {
    res.render('slidebook.ejs');
})

app.listen(port,()=>{
    console.log(port+" is open!");
});

