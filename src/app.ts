import express from "express";
import router from "./routes/routes";
import sequelize from "./utils/connection"


const app = express();


app.use(express.json());
app.use(router);

app.listen(4444, async() =>{
    await sequelize.sync();
    console.log('App is working');
})


