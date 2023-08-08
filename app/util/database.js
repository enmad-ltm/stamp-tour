const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '121.254.219.69',
  user: 'event_dev',
  password: 'enmADdlqpsxm9!',
  database: 'test_stamp',
  port: '3307',
});

module.exports = pool.promise();

module.exports = {
    query: (...args) => promisePool.query(...args),
    close: () => promisePool.end(),
};