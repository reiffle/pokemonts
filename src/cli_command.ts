import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { CLIcommand } from "./state.js";

export function getcommands(): Record<string, CLIcommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit
        }
    };
}