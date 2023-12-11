// const user = require('./controller/user.controller')
// const { MongoClient, ObjectId } = require('mongodb');
// const { v4: uuidv4 } = require('uuid');

// // Connection URI for MongoDB
// const uri = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Function to generate and save UID separately
// async function generateAndSaveSeparateUID() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const database = client.db('users');
//     const collection = database.collection('your-collection-name');

//     // Generate a new unique ID using uuid
//     const uid = uuidv4();

//     // Save the UID separately in MongoDB
//     const separateDocument = { separate_uid: uid };
//     await collection.insertOne(separateDocument);

//     console.log('Separate UID saved:', uid);

//     // Find and display the saved document with the separate UID
//     const savedDocument = await collection.findOne({ _id: separateDocument._id });
//     console.log('Saved document with separate UID:', savedDocument);
//   } finally {
//     await client.close();
//     console.log('Disconnected from MongoDB');
//   }
// }

// // Call the function to generate and save a separate UID
// generateAndSaveSeparateUID();
