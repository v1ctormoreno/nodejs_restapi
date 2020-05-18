const express = require('express');
const path = require('path');
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pool = require('./database')

const app = express();
require('./database');

//Middleware
app.set('json spaces', 2); -
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');

//Public
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use(require(`./routes/default.routes`));
app.use('/api/employees',require(`./routes/employees.routes`));

app.listen(app.get('port'), () => {
    console.log('Server is running on port ' + app.get('port'));
});
