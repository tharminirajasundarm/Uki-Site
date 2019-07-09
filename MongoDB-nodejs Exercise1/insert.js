var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = [
    {songName:'Thaniye Thananthaniye',film:'Rhythm',musicDirector:'A.R.Rahman',singer:'Shankar mahadevan'},
    {songName:'Evano Oruvan',film:'Alai Payuthey',musicDirector:'A.R.Rahman',singer:'Swarnalatha' },
    {songName:'Roja Poonthottam',film:'Kannukkul Nilavu',musicDirector:'Ilaiyaraaja',singer:'Unnikrishnan,Anuradha Sriram'},
    { songName:'Vennilavae Vennilavae Vinnaithaandi',film:'Minsara Kanavu',musicDirector:'A.R.Rahman',singer:'Hariharan,Sadhana Sargam'},
    { songName:'Sollamal Thottu Chellum Thendral',film:'Dheena',musicDirector:'Yuvan sangar raja',singer:'Hariharan'}


  ];
  dbo.collection("songdetails").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
