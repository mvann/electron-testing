const Datastore = require('nedb');

class Database{
  constructor() {
    this.paths = new Datastore({ filename: './db/projects', autoload: true });
  }

  getAllPaths() {
    return (this.paths.find({}));
  }
}

module.exports = new Database();
