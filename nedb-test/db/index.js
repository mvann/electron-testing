const Datastore = require('nedb');
const path = require('path');
console.log(__dirname);
class Database{
  constructor() {
    this.paths = new Datastore({ filename: path.join(__dirname, 'collections', 'projects'), autoload: true });
  }
}

module.exports = new Database();
