import { CLIcommand } from "./cli_command";

export function commandExit(commands: Record<string, CLIcommand>) {
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);
}