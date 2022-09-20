import app from "./server";
import {DatabaseService} from "./service/database.service";

//src start
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server start on port : ${process.env.PORT}`)
})

//DB connect
new DatabaseService().connect(()=>{
        console.log("DB success Connect");
    }
);
