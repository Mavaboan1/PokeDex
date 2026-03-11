import { State } from "./state.js";

export async function startREPL(state: State) {

    state.readline.prompt();

    state.readline.on("line", async(input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            state.readline.prompt();
            return;
        }
        const commandName = words[0];
        const cmd = state.commands[commandName];

        if (!cmd) {
            console.log("Unknown command: ", cmd);
            state.readline.prompt();
            return;
        }

        try {
            await cmd.callback(state);
        } catch (e) {
            console.log((e as Error).message);
        }

        state.readline.prompt();
    })

}



export function cleanInput(input: string): string[] {
    const actual = input.toLowerCase().trim().split(" ").filter((word) => word !== "");
    return actual;

}


