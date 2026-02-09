import { createInterface } from "readline";
import { getCommands } from "./registry.js";

export function startREPL() {
    const repl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    repl.prompt();

    repl.on("line", async (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            repl.prompt();
            return;
        }

        const commandName = words[0];
        
        const commands = getCommands();
        const cmd = commands[commandName];

        if (!cmd) {
            console.log("Unknown command");
            repl.prompt();
            return;
        }
        try {
            cmd.callback(commands);
        } catch (e) {
            console.log(e);
        }

        repl.prompt();
    })
}



export function cleanInput(input: string): string[] {
    const actual = input.toLowerCase().trim().split(" ").filter((word) => word !== "");
    return actual;

}


