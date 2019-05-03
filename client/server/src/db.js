const monk = require('monk');
// const db = monk(process.env.DATABASE_URL);
var db = monk('localhost/mydb', function(err, db){
    if(err){
       console.error("Db is not connected", err.message);
    }
});



module.exports = db;
