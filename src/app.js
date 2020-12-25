
const path = require('path')
const express = require('express');
const handlebars = require('express-handlebars');
const { static } = require('express');
const app = express();

const port = 8000;

app.use(express.static(path.join(__dirname, 'public')))
// Template Engine
app.engine('hbs', handlebars({ // tạo ra cái engin là hbs
  extname: '.hbs'
})); //app use template engine is hbs 
// ten dat la hbs nem' thu vien express-handlerbar vào hàm handlebar() - hbs = handlebar()
app.set('view engine', 'hbs'); // use view engine is hbs chính cái hbs bên trên ,
// tạo ra cái engin là hbs thì sử dụng view engine phải là hbs
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {

  res.render('home');// chui vào views tìm đén thư mục home.hbs
})

app.get('/news', (req, res) => {

  res.render('news');// chui vào views tìm đén thư mục news.hbs
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 