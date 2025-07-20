const {MongoClient} = require("mongodb");

// Connection URL

const client  = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() { 
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("users");

    // const data = {
    //     firstName: "Sunil",
    //     lastName: "Kumar",
    //     city: "Delhi",
    //     phone: "95XXXXXXXX"
    // }

    // insert document
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);
    

    // update document
    // const updateResult = await collection.updateOne({ firstName: "Sunil" }, 
    //     { $set: { 
    //         firstName: "Sunil",
    //         lastname: "Raj",
    //         city:"Rampur",
    //         phone: "908xxxxxx"
    //     } });
    // console.log('Updated documents =>', updateResult);

    // remove document
    const deleteResult = await collection.deleteMany({ firstName: "Salman" });
    console.log('Deleted documents =>', deleteResult);

    // read document
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return "done";
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());

