///This script only generates a new qr code

var uniqid = require('uniqid');
var QRCode = require('qrcode')
var qr = require('qr-image');



function gen() {
    var qr_png = qr.image(uniqid(), { type: 'png' });
    qr_png.pipe(require('fs').createWriteStream('qr2.png'));
    var png_string = qr.imageSync(uniqid(), { type: 'png' });
    var QRCode = require('qrcode')

}
 
gen()
