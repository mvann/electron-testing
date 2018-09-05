const db = require('./db');

db.paths.find({}, (err, docs) => {
  if (err)
    console.log(err);
  else
    console.log(docs);
});
