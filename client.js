const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: HAN');
    // setTimeout(() => {
    //   conn.write('Move: up')},500);
    // setTimeout(() => {
    //   conn.write('Move: up')},1000);
    // setTimeout(() => {
    //   conn.write('Move: up')},1500);
    // setTimeout(() => {
    //   conn.write('Move: right')},2000);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};