import QRCode from "qrcode";

export function generateQRCode(data) {
  let qrcodeSVG = "";
  QRCode.toString(data, function (error, string) {
    if (error) throw error;
    qrcodeSVG = string;
    console.log(string);
  });
  return qrcodeSVG;
}
