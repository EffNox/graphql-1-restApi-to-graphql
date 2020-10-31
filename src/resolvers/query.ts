import { IResolvers } from "graphql-tools";

const query: IResolvers = {
    Query: {
        seasonsList: async (_, __, { dataSources }) => await dataSources.seasons.getAll().then(({ MRData: { SeasonTable: { Seasons: dt } } }: any) => dt),
        racesByYear: async (_, { year }, { dataSources }) => await dataSources.races.getAllByYear({ year }).then(({ MRData: { RaceTable: { Races: dt } } }: any) => dt)
    }
}

export default query;
