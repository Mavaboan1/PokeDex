import { commandExit } from "./command_exit.js";
import { commandCatch, commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandPokedex } from "./command_pokedex.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Display names of 20 locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Display names of 20 previous locations",
            callback: commandMapB,
        },
        explore: {
            name: "explore",
            description: "Display pokemon found in the location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Try to catch specified pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Description of specified captured pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Show caught pokemon",
            callback: commandPokedex,
        }
    }
}