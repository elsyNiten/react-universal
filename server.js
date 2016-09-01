import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// parsers
app.use(require('cookie-parser')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', require('./pages/home/homeController'));

// static file serving
app.use(require('compression')());
app.use(express.static(__dirname + '/.tmp', { maxAge: 31536000000 }));

app.listen(process.env.PORT || 1337, () => {
  console.log(`server started ➜ http://localhost:${process.env.PORT || 1337}`);
});
