import mongoUnit from "mongo-unit";

mongoUnit.start().then(() => {
    console.log('Mock mongo server is started: ', process.env.MOCK_DB_URL);
    process.env.DATABASE_URL = mongoUnit.getUrl(); // this var process.env.DATABASE_URL = will keep link to fake mongo
    run(); // this line start mocha tests
})

after(() => {
    console.log('Tests END')
    return mongoUnit.stop()
})