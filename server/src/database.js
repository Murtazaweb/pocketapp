import { MongoClient } from "mongodb";

//const URL = 'mongodb://localhost:27017/chatapp';

const URL =
  "mongodb://murtaza:murtaza111@ds051524.mlab.com:51524/heroku_8ppk1qtg";
export default class Database {
  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        return err ? reject(err) : resolve(db);
      });
    });
  }
}
