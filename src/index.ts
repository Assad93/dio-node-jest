import express from "express";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const server = app.listen(5000, () => {
  console.log("Server is running!");
});

export default server;
