import { createInterface, type Interface } from "readline";
import { getcommands} from "./cli_command.js";


export type State = {
    readline: Interface,
    commands: Record<string, CLIcommand>,
}

export type CLIcommand = {
    name: string,
    description: string,
    callback: (state: State) => void,
}

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex> ",
    });

    const commands = getcommands();
    return {
        readline: rl,
        commands: commands,
    }
}
