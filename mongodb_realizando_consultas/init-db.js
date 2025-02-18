// Select or create the database
db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE || "showbank");

// Define the collection name
const collectionName = "Clients";

// Load the JSON file from the mounted volume
const filePath = "/docker-entrypoint-initdb.d/Clientes.json";
const jsonData = cat(filePath); // Read the JSON file
const data = JSON.parse(jsonData); // Parse JSON into an object

// Drop the collection if it already exists
db[collectionName].drop();

// Insert the parsed JSON data into the collection
db[collectionName].insertMany(data);

// ------------------------------------------------------------------------
