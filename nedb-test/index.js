const db = require('./db/db.js');

db.paths.find({}, (err, docs) => {
  if (err)
    console.log(err);
  else
    console.log(docs);
});
