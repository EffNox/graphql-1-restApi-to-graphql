import { F1 } from "./dt-source";

export class DTRaces extends F1 {
    constructor() { super(); }

    getAllByYear = async ({ year = '' }) => this.get(`${year}.json`, {}, { cacheOptions: { ttl: 60 } })

}
