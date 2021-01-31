const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./routes')





const app = express();
// encontrar los archivos staticos
app.use(express.static('public'));
//abrir el Body parse
app.use(bodyParse.urlencoded({ extended: true }));
// cargar las rutas
app.use('/', routes());
app.listen(3000)