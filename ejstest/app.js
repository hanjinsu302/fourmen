const express = require('express');
const app = express();

const port = 3000;
app.set('view engine','ejs');
app.set('/views','views');
app.use('/static',express.static(__dirname + '/static'));

app.get('/',function(request,response){
    //response.send('hello express');
    response.render('test');
});

app.listen(port,()=>{
    console.log(port+" is open!");
});