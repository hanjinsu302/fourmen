const express = require('express');
const app = express();

const port = 4040;
app.set('view engine','ejs');
app.set('/view','views');
app.use('/static',express.static(__dirname + '/static'));

app.get('/',function(request,response){
    response.render('index');
});

app.get('/index',function(request,response){
    response.render('index');
});

app.get('/matches', function(req, res) {
    res.render('matches');
})

app.get('/index/matches', function(req,res){

    res.render('matches.ejs');

})


app.get('/players', function(req, res) {
    res.render('players');
})

app.get('/index/players', function(req,res){

    res.render('players.ejs');

})


app.get('/blog', function(req, res) {
    res.render('blog');
})

app.get('/index/blog', function(req,res){

    res.render('blog.ejs');

})


app.get('/contact', function(req, res) {
    res.render('contact');
})

app.get('/index/contact', function(req,res){

    res.render('contact.ejs');

})



app.listen(port,()=>{
    console.log(port+" is open!");
});

