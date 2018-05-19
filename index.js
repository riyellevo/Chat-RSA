

var app = require('express')();

const express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
const rsaWrapper = require('./components/rsa-wrapper');
rsaWrapper.initLoadServerKeys(__dirname);
rsaWrapper.serverExampleEncrypt();
app.use(express.static(__dirname + '/static'));
// const NodeRSA = require('node-rsa');
// let key = new NodeRSA();
// key.generateKeyPair(2048, 65537);
