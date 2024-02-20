import * as fs from "fs";
import * as crypto from "crypto";

const privateKey = fs.readFileSync("private-key.pem", "utf-8");

function generateDigitalSignature(data) {
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(data);
  return sign.sign(privateKey, "base64");
}

const publicKey = fs.readFileSync("public-key.pem", "utf-8");

function validateDigitalSignature(data, receivedSignature) {
  const verify = crypto.createVerify("RSA-SHA256");
  verify.update(data);
  return verify.verify(publicKey, receivedSignature, "base64");
}

// Example data to sign
const dataToSign = "Hello, world!";

// Generate a digital signature
const signature = generateDigitalSignature(dataToSign);
console.log("Generated Signature:", signature);

// Validate the digital signature
const isSignatureValid = validateDigitalSignature(dataToSign, signature);
console.log("Signature Validation Result:", isSignatureValid);
