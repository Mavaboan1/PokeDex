import { ShallowLocations, Location } from "./location_type";
import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    pokeCache: Cache;

    constructor(cacheInterval: number) {
        this.pokeCache = new Cache(cacheInterval);
    }


    closeCache() {
        this.pokeCache.stopReapLoop();
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;

        const cached = this.pokeCache.get<ShallowLocations>(url);
        if (cached !== undefined) {
            return cached;
        }

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const locations: ShallowLocations = await resp.json();
            this.pokeCache.add(url, locations);
            return locations;
        } catch (e) {
            throw new Error(`Error fetching locations: ${(e as Error).message}`);
        }
    }

    async fetchLocation(locationName: string): Promise<Location>  {
        const url = `${PokeAPI.baseURL}/location-area/${locationName}`;

        const cached = this.pokeCache.get<Location>(url);
        if (cached !== undefined) {
            return cached;
        }

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }
            
            const location: Location = await resp.json();
            this.pokeCache.add(url, location);
            return location;
        } catch (e) {
            throw new Error(`Error fetching location '${locationName}': ${(e as Error).message}`);
        }
    }

}
