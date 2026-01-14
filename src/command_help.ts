import { CLIcommand, getcommands } from "./cli_command.js";

export function commandHelp (commands: Record<string, CLIcommand>) {;
  console.log("Welcome to the Pokedex!\nUsage:\n")
  for (const key in commands) {
    console.log(`${key}: ${commands[key].description}`);
  }
}