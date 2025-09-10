import express from "express"
import router from "./routes.js";

//buat server
const app = express()
const port = 5000

app.use(express.json());

app.use(router);

app.listen (port, () => {
    console.log(`server running at http://localhost:${port}`)
})



