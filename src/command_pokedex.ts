import { State } from "./state.js";


export async function commandPokedex(state: State) {
    console.log("Your Pokedex:");
    for (const pokemon of Object.values(state.pokedex)) {
        console.log(`   - ${pokemon.name}`);
    }
    const json = JSON.stringify(state.pokedex);
    console.log(json);
}

// Saving to File
// Write to Record<string, saveType> for each pokemon.
// Stringify Record<string, saveType> to JSON
// Write Json to file

// Load from file
// Load json to const
// Write to state.pokedex. Might have a long load if doing api calls.
// 