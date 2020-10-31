import express from 'express';
import compression from 'compression';
import schema from './src/schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import Database from './src/utils/db';
import { dataSrc } from './src/data';
const { parsed: { PORT, GQL, DB } } = require('dotenv').config()

async function init() {
    const app = express();

    app.use(compression());

    const db = await new Database().init(DB)
    const context: any = async ({ req, connection }: any) => ({ db })

    const server = new ApolloServer({
        schema,
        introspection: true,
        context,
        playground: !0,
        dataSources: () => ({
            seasons: new dataSrc.DTSeassons(),
            races: new dataSrc.DTRaces()
        })
    });

    server.applyMiddleware({ app, path: '/gql' })

    const httpServer = createServer(app);
    httpServer.listen(PORT, () => console.log(GQL));
}

init();
