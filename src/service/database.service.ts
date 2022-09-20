import * as mongoose from "mongoose";

export class DatabaseService {
    private url;

    constructor() {
        this.url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.um4dvu8.mongodb.net/?retryWrites=true&w=majority`;
    }

    async connect(onSuccess){
         const client = await mongoose.connect(this.url);
         onSuccess(client);
    }

    public getUri() {
        return this.url;
    }

    public setUrl(url) {
        this.url = url;
    }
}