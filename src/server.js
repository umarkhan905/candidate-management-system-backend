import { app } from "./app.js";
import { connectDB } from "./config/db.config.js";
import { env } from "./config/env.config.js";

connectDB().then(() => {
  app.listen(env.PORT, () =>
    console.log(`Server is running on port ${env.PORT}`)
  );

  app.on("error", (error) =>
    console.log(`Failed to start express server: ${error}`)
  );
});
