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


function searchDishwashers(object) {
  async function run(object) {
      try {
        await client.connect();
        console.log("im inside mongo db search for dishwashers")
        var collection = client.db("dishwashers").collection("dishwashers_c")
        // Query for a movie that has the title 'The Room'
  
  
        const dishwashers = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
        return dishwashers.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchDishwashers = searchDishwashers;

function searchTelevisions(object) {
  async function run(object) {
      try {
        await client.connect();
        console.log("im inside mongo db search for televisions")
        var collection = client.db("televisions").collection("televisions_c")
        // Query for a movie that has the title 'The Room'
  
  
        const televisions = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
        return televisions.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchTelevisions = searchTelevisions;

function searchStoves(object) {
  async function run(object) {
      try {
        await client.connect();
        console.log("im inside mongo db search for televisions")
        var collection = client.db("stoves").collection("stoves_c")
        // Query for a movie that has the title 'The Room'
  
  
        const stoves = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
        return stoves.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchStoves = searchStoves;

function searchAirconditioners(object) {
  async function run(object) {
      try {
        await client.connect();
        console.log("im inside mongo db search for televisions")
        var collection = client.db("airconditioners").collection("airconditioners_c")
        // Query for a movie that has the title 'The Room'
  
  
        const airconditioners = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
        return airconditioners.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchAirconditioners = searchAirconditioners;

function searchOvens(object) {
  async function run(object) {
      try {
        await client.connect();
        console.log("im inside mongo db search for ovens")
        var collection = client.db("ovens").collection("ovens_c")
        // Query for a movie that has the title 'The Room'
  
  
        const ovens = await collection.find(object);
        // since this method returns the matched document, not a cursor, print it directly
        return ovens.toArray()
      }
      catch(err) {
       return err
      }
    }
    return new Promise((resolve,reject) => {
      resolve(run(object))
    })  
}
exports.searchOvens = searchOvens;

