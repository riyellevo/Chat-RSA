
const path = require('path');
const rsaWrapper = {};
const fs = require('fs');
const NodeRSA = require('node-rsa');
const crypto = require('crypto');
// open and closed keys generation method
rsaWrapper.generate = (direction) => {
let key = new NodeRSA();
// 2048 — key length, 65537 open exponent
key.generateKeyPair(2048, 65537);
//save keys as pem line in pkcs8
fs.writeFileSync(path.resolve(__dirname, 'keys', direction + '.private.pem'), key.exportKey('pkcs8-private-pem'));
fs.writeFileSync(path.resolve(__dirname, 'keys', direction + '.public.pem'), key.exportKey('pkcs8-public-pem'));
return true;
};
module.exports = rsaWrapper;

// encrypting RSA, using padding OAEP, with nodejs crypto:
    rsaWrapper.encrypt = (publicKey, message) => {
    let enc = crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.RSA_PKCS1_OAEP_PADDING
    }, Buffer.from(message));
    return enc.toString('base64');
    };
    // descrypting RSA, using padding OAEP, with nodejs crypto:
     rsaWrapper.decrypt = (privateKey, message) => {
    let enc = crypto.privateDecrypt({
    key: privateKey,
    padding: crypto.RSA_PKCS1_OAEP_PADDING
    }, Buffer.from(message, 'base64'));
    return enc.toString();
    };
    // Loading RSA keys from files to variables:
    rsaWrapper.initLoadServerKeys = (basePath) => {
    rsaWrapper.serverPub = fs.readFileSync(path.resolve(basePath, 'components', 'keys', 'client2.public.pem'));
    rsaWrapper.serverPrivate = fs.readFileSync(path.resolve(basePath, 'components','keys', 'client2.private.pem'));
    rsaWrapper.clientPub = fs.readFileSync(path.resolve(basePath,  'components','keys', 'client.public.pem'));

};
    var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rsa"
});
var biji="aaaa";
con.connect(function(err) {
    
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO chat_room (public_key_1, public_key_2) VALUES (' "+rsaWrapper.serverPub+"', 'asdad')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });



    // Run RSA encryption test scenario. Message is encrypted, log on console in base64 format and message is decrypted and log on console.
    rsaWrapper.serverExampleEncrypt = () => {
    console.log('Server public encrypting');
    let enc = rsaWrapper.encrypt(rsaWrapper.serverPub, 'itil meong');
    console.log('Server private encrypting …');
    console.log('Encrypted RSA string' , '\n', enc);
    let dec = rsaWrapper.decrypt(rsaWrapper.serverPrivate, enc);
    console.log('Decrypted RSA string …');
    console.log(dec);
    };