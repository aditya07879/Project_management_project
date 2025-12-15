import "dotenv/config";
import app from "./app.js";
import ConnectDB from "./db/databaseConnect.js";

const port = process.env.PORT || 3000;

ConnectDB()
   .then(() => {
      app.listen(port, () => {
         console.log(`Example app listening on port ${port}`);
      });
   })
   .catch((err) => {
      console.log("MongoDB connection error", err);
      process.exit(1);
   });
