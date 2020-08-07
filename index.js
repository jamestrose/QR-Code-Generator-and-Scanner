///This is the main script which actually generates the pdf using the qr code from gen.js


var uniqid = require('uniqid');
var QRCode = require('qrcode')
var qr = require('qr-image');
var Jimp = require("jimp");
const fs = require('fs');
var QrCode = require('qrcode-reader');
var qr = new QrCode();
const winston = require('winston');
var util = require('util');


//console.log(uniqid()); // -> 4n5pxq24kpiob12og9 18 character
//console.log(uniqid(), uniqid()); // -> 4n5pxq24kriob12ogd, 4n5pxq24ksiob12ogl

//uniqid.process() -> "24ieiob0te82" 12 character
//console.log(uniqid.process());
//uniqid.time() -> "iob0ucoj" 8 character
//console.log(uniqid.time()); 

 
//var qr_png = qr.image(uniqid.process(), { type: 'png' });
//qr_png.pipe(require('fs').createWriteStream('qr2.png'));
//var png_string = qr.imageSync(uniqid.process(), { type: 'png' });



const QRReader = require('qrcode-reader');

const jimp = require('jimp');

run().catch(error => console.error(error.stack));

async function run() {
  const img = await jimp.read(fs.readFileSync('qr2.png'));
  const PDFDocument = require('pdfkit');
  const qr = new QRReader();
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('output'+uniqid()+'.pdf'));
  // qrcode-reader's API doesn't support promises, so wrap it
  const value = await new Promise((resolve, reject) => {
    qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
    qr.decode(img.bitmap);
  });

  console.log(value);

  console.log(value.result);
  doc.text('QR Card')
  doc.image('qr2.png')
  doc.text('Your unique ID is: ')
  doc.text(value.result)
  doc.end()
}

 





