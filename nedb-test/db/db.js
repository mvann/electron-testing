const Datastore = require('nedb');
const path = require('path');

console.log("dn: ", path.join(__dirname, 'collections'));

class Database{
  constructor() {
    this.paths = new Datastore({ filename: path.join(__dirname, 'collections', 'projects'), autoload: true });
  }
}

module.exports = new Database();
