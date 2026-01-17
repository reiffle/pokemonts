//can import directly bc of "type": "module" in package.json
import { State } from "./state.js";

export function startREPL(state: State) {
  state.readline.prompt();
  state.readline.on('line', (line:string) => {
    let x = cleanInput(line);
    if (x.length>0) {
      const command = x[0]
      const commands = state.commands;
      const cmd = commands[command];
      if(cmd && typeof cmd.callback==='function') {
        cmd.callback(state);
        }  
      else {
        console.log(`Unknown command: ${command}`);
      }
      //put stuff here

    }
    state.readline.prompt();
  });
}

export function cleanInput (input: string): string[] {
  const x=input.toLowerCase();
  return x.split(" ").filter((s) => s.length>0);
}
