import { cleanInput } from "./repl";

import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world  ",
        expected: ["hello", "world"],
    },
    {
        input: "pokedex HELP INDEX",
        expected: ["pokedex", "help", "index"],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Exptected: ${expected}`, () => {

        const actual = cleanInput(input);

        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i])
        }
    })
})