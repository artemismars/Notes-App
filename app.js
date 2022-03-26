require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = process.env.PORT || 8080;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes*.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve(), swaggerUi.setup(openapiSpecification));
app.use(require("./routes/global"));

app.listen(PORT, () => {
  console.log(`Server is listening to port on ${PORT}`);
});
