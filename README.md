# Lab 2 - Task 4: Digital Signatures Demo

In this task, you will get a demonstration of digital signatures and how to generate key using OpenSSL library.

## Reference
Signing and Validating Data with Digital Signatures in Node.js using TypeScript: https://medium.com/@sargsyan.vlad/signing-and-validating-data-with-digital-signatures-in-node-js-using-typescript-c7a223c631cf 

## Project Preparation
1.	Clone or download the code from the following GitHub repo: https://github.com/houcine1amraoui/lab2-task4-digital-signatures-demo  
2.	Open the project folder with VS Code.
3.	Open the integrated terminal, “cd” into the “server” folder, then run “npm install” command to install the dependencies used by the server.
4.	Open the integrated terminal, “cd” into the “client” folder, then run “npm install” command to install the dependencies used by the client.

## OpenSSL Keys Generation
1.	“cd” into the “server” folder, then run the following command to generate a private key: "openssl genpkey -algorithm RSA -out private-key.pem”
2.	In the same terminal, run the following command to generate a public key from the pre-generated private key: “openssl rsa -pubout -in private-key.pem -out public-key.pem”
3.	Run the server.

## Questions
1.	Run the client script and explain the whole process of what have been displayed in the console.
2.  Can the client trust the server’s certificate considering that it is signed by the server itself. What is the solution?
