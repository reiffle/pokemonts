import { State } from "./state.js";

export function commandHelp (state: State) {
  console.log("Welcome to the Pokedex!\nUsage:\n")
  for (const key in state.commands) {
    console.log(`${key}: ${state.commands[key].description}`);
  }
}