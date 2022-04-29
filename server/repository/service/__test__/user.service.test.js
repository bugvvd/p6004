const { MongoClient } = require("mongodb");
console.log(global.__MONGO_URI__, global.__MONGO_DB_NAME__);
describe("insert (register)", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
  });

  it("should insert a doc into collection", async () => {
    const users = db.collection("user");

    const mockUser = { username: "some-user-id", abc: "123" };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ username: "some-user-id" });
    console.log(insertedUser.username);
    expect(insertedUser).toEqual(mockUser);
  });
});
