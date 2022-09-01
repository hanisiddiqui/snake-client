const net = require("net");
const connect = require('./client.js');

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  // your code here
  if ('\u0003') {
    process.exit();
  }
};



setupInput();

console.log("Connecting ...");
connect();