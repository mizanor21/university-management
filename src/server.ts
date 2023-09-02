import app from "./app";
import mongoose from "mongoose";
import config from "./config/index";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Successfully connect database!");

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to connect database!");
  }
}
main().catch((err) => console.log(err));
