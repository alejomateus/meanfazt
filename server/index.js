var express = require('express');
var morgan = require('morgan');
var app = express();
var {mongoose} = require ('./database');
var cors = require('cors');
// Settings
app.set('port', process.env.PORT || 5000);
//app.set('port',5000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Routes
app.use('/api/empleados',require('./routes/empleados.routes'));


//Starting the server
app.listen(app.get('port'),()=>{
	console.log("Server running on port "+app.get('port'));
});
app.listen(5001,'192.168.0.3');


