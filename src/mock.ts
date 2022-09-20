import app from "./server";
import {DatabaseService} from "./service/database.service";

//src start
const server = app.listen(3030, ()=>{
    console.log(`Server start on port : ${3030}`)
})

//DB connect
const dbService = new DatabaseService();
dbService.setUrl('mongodb://localhost:27017');
dbService.connect(()=>{
    console.log("MOCK DB success Connect");
    }
);

export default app;