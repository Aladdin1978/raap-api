const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

let rappers = {
  "21 savage": {
    age: 28,
    birthName: "Seyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  Aladdin: {
    age: 44,
    birthName: "Alladeen Aghel",
    birthLocation: "Tripoli",
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (request, response) => {
  console.log(request);
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/rappers/:rapperName", (request, response) => {
  const rapName = request.params.rapperName;
  console.log(rapName);
  if (rappers[rapName]) {
    response.json(rappers[rapName]);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  // the "process.env.PORT" is for heroku port process because obvioulsy 8000 is not supported
  console.log(`Server running on port ${PORT}`);
});
