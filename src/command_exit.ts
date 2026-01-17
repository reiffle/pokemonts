import { State } from "./state.js";

export function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.readline.close(); // Close the readline interface
  process.exit(0);
}