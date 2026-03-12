import { State } from "./state.js";


export async function commandExplore(state: State, ...args: string[]) {
    const pokemon = await state.pokeAPI.fetchLocation(args[0]);

    console.log(`Exploring ${args[0]}...`);
    console.log("Found Pokemon:")
    for (const poke of pokemon.pokemon_encounters) {
        console.log(`- ${poke.pokemon.name}`);
    }

}

export async function commandCatch(state: State, ...args: string[]) {
    const pokemon = await state.pokeAPI.fetchPokemon(args[0]);

    console.log(`Throwing a Pokeball at ${args[0]}...`);
    let isCatched: boolean = false;
    const catchRate: number = Math.max(1, 635 - pokemon.base_experience)
    const chance: number = Math.floor(Math.random() * 635);

    if (chance < catchRate) {
        isCatched = true;
    }

    if (isCatched) {
        console.log(`${args[0]} was caught!`);
        state.pokedex[args[0]] = pokemon;
    } else {
        console.log(`${args[0]} escaped!`);
    }
}