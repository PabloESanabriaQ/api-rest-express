const express = require("express");
const v1TaskRouter = require("./src/v1/routes/tasks.routes");

const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());

//Routes
app.use("/api/v1/tasks", v1TaskRouter);

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
});