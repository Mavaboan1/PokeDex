import { State } from "./state.js";


export async function commandMap(state: State) {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    for (const loc of locations.results) {
        console.log(loc.name);
    }
}

export async function commandMapB(state: State) {
    if (!state.prevLocationsURL) {
        throw new Error("You are on the first page");
    }
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;

    for (const loc of locations.results) {
        console.log(loc.name);
    }
}