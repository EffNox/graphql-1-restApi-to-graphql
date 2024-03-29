import { IResolvers } from "graphql-tools";
import { getWikipediaMobileUrl } from "../utils/utils";

const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.raceName,
        location: parent => parent.Location,

    }
}

export default type;
