import axios from "axios";
import crypto from "crypto";

// 1. The client asks for the certificate
const response = await axios.get("http://localhost:4000/public");
const { originalServerPublicKey, signedServerPublicKey } = response.data;

// 2. The client verifies the certificate
const verify = crypto.createVerify("RSA-SHA256");
verify.update(originalServerPublicKey);
const match = verify.verify(
  originalServerPublicKey,
  signedServerPublicKey,
  "base64"
);
console.log(match);

///
