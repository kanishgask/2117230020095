const Log = require("../logging_middleware/logger");

async function start() {
  await Log("backend", "info", "handler", "Backend started");
}

start();
