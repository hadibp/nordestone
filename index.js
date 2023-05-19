const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Change the port number if needed

app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world go to /calculate");
});

app.post("/calculate", (req, res) => {
  // console.log(req.body);

  let result;
  const { num1, num2, operator } = req.body;

  if (operator === "add") {
    result = Number(num1) + Number(num2);
  } else if (operator === "subtract") {
    result = Number(num1) - Number(num2);
  } else if (operator === "multiply") {
    result = Number(num1) * Number(num2);
  }
   else if (operator === "division") {
    result = Number(num1) / Number(num2);
  }
  console.log(result);
  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
