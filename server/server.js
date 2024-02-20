import express from "express";
import crypto from "crypto";
import * as fs from "fs";

const app = express();
app.use(express.json());

const serverPrivateKey = fs.readFileSync("private-key.pem", "utf-8");
const originalServerPublicKey = fs.readFileSync("public-key.pem", "utf-8");

app.get("/public", async (req, res) => {
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(originalServerPublicKey);
  const signedServerPublicKey = sign.sign(serverPrivateKey, "base64");
  const certificate = { originalServerPublicKey, signedServerPublicKey };
  res.send(certificate);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
