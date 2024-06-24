const createServer = require("./src/app.js");
const db = require("./src/db/index.js");
const server = createServer();
const PORT = process.env.PORT || 3000;

const main = async () => {
  await db.authenticate();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

main();
