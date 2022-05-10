const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket')

const app = express();
const server = http.Server(app);
setupWebsocket(server);

mongoose.connect(`mongodb+srv://ruivaldo:Parangole1@cluster0.shiiu.mongodb.net/week10?retryWrites=true&w=majority`)


app.use(cors())
app.use(express.json())
app.use(routes);



server.listen(3333);