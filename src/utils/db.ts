import { MongoClient } from "mongodb";

class Database {
    async init(url: string) {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = await client.db()
        return db
    }
}

export default Database
