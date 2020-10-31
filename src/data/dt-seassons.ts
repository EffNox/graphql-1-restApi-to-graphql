import { F1 } from "./dt-source";

export class DTSeassons extends F1 {
    constructor() {
        super();
    }

    getAll = async () => this.get('seasons.json?limit=80', {}, { cacheOptions: { ttl: 60 } })

}
