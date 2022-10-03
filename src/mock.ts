import app from "./server";
import {DatabaseService} from "./service/database.service";

//src start
const server = app.listen(process.env.MOCK_SERVER_PORT, ()=>{
    console.log(`Server start on port : ${process.env.MOCK_SERVER_PORT}`)
})

//DB connect
const dbService = new DatabaseService();
dbService.setUrl('mongodb://localhost:27017');
dbService.connect(()=>{
    console.log("MOCK DB success Connect");
    }
);

export default app;