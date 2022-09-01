const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',// IP address here,
    port: 50541// PORT number here,
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

module.exports = connect;