const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();

// Set the initial visits to 0.
client.set("visits", 0);

app.get("/", (request, response) => {
  client.get("visits", (err, visits) => {
    response.send(`Number of visits ${visits}`);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8081, () => console.log(`Application running on port 8081`));
