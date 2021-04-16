const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
  const uri =
    'mongodb url';

  MongoClient.connect(
    uri,it branch -M main
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('MERG-BE');

      if (err) {
        return callback(err);
      } else {
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };
