import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import config from "./config/config";

const port = config.port;

let server: Server;

// Main server function
async function main() {
  try {
    const uri = config.database_url;
    await mongoose.connect(`${uri}`);
    console.log(`🛢 Database Connected Successfully`);

    server = app.listen(port, () => {
      console.log(`Server is running on  http://localhost:${port}`);
    });
  } finally {
    //
  }
}

// Calling main server function with error validation
main().catch(error => console.error(error.message));
