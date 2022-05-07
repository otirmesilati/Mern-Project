const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://db_user:BPSMz7H0PUlVUz7G@cluster0.ldkqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




function searchLaundryMachines(object) {
    async function run(object) {
        try {
          await client.connect();
          var collection = client.db("laundrymachines").collection("laundrymachines_c")
          // Query for a movie that has the title 'The Room'
    
    
          const machines = await collection.find(object);
          // since this method returns the matched document, not a cursor, print it directly
          return machines.toArray()
        }
        catch(err) {
         return err
        }
      }
      return new Promise((resolve,reject) => {
        resolve(run(object))
      })  
}
exports.searchLaundryMachines = searchLaundryMachines;

function searchDryers(object) {
  async function run(object) {
      try {
        await client.connect();
        var collection = client.db("dryers").collection("dryers_c")
        // Query for a movie that has the title 'The Room'
  
  
        const dryers = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
        return dryers.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchDryers = searchDryers;


function searchRefrigerators(object) {
  async function run(object) {
      try {
        await client.connect();
        console.log("im inside mongo db search for getrefrigerators")
        var collection = client.db("refrigerators").collection("refrigerators_c")
        // Query for a movie that has the title 'The Room'
  
  
        const refrigerators = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
        return refrigerators.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchRefrigerators = searchRefrigerators;

