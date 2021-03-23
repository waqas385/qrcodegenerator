import { generateQRCode } from "./js/qrcode_generator";

let qrcodeImage = document.querySelector("#qrcode");
console.log(">>>>>>>>>>>>>>>", generateQRCode("Here I am"));

qrcodeImage.innerHTML = generateQRCode("Here I am");
