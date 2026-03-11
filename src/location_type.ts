
export type ShallowLocations = {
    count: number,
    next: string,
    previous: string,
    results: Result[],
};

type Result = {
    name: string,
    url: string
}

export type Location = {
    id: number,
    name: string,
    game_index: number,
    encounter_method_rate: EncounterMethodRates[],
    current_location: currentLocation,
    names: Name[],
    pokemon_encounters: PokemonEncounter[],
};

type EncounterMethodRates = {
    encounter_method: EncounterMethod,
    version_details: VersionDetail[],
}

type EncounterMethod = {
    name: string,
    url: string
}

type VersionDetail = {
    rate: number,
    version: Version
}

type Version = {
    name: string,
    url: string
}

type currentLocation = {
    name: string,
    url: string
}

type Name = {
    name: string,
    language: Language
}

type Language = {
    name: string,
    url: string
}

type PokemonEncounter = {
    pokemon: Pokemon,
    version_details: VersionDetail2[]
}

type Pokemon = {
    name: string,
    url: string
}

type VersionDetail2 = {
    version: Version2,
    max_chance: number,
    encounter_details: EncounterDetail[]
}

type Version2 = {
    name: string,
    url: string
}

type EncounterDetail = {
    min_level: number,
    max_level: number,
    condition_values: any[],
    chance: number,
    method: Method
}

type Method = {
    name: string,
    url: string
}