const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //aqui ele fica escutando pra ver se chega alguma coisa, se chegar ele decide pelo routes.js
