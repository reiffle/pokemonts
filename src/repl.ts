//can import directly bc of "type": "module" in package.json
import { createInterface } from "readline";
import { getcommands } from "./cli_command.js";

export function startREPL() {

  //define key/value pairs
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  //Once the readline.Interface instance is created, the most common case is to listen for the 'line' event:
  rl.prompt(); //display prompt and wait for user input
  rl.on('line', (line:string) => {
    let x = cleanInput(line);
    if (x.length>0) {
      const command = x[0]
      const commands = getcommands();
      const cmd = commands[command];
      if(cmd && typeof cmd.callback==='function') {
        cmd.callback(commands);
        }  
      else {
        console.log(`Unknown command: ${command}`);
      }
      //put stuff here

    }
    rl.prompt();
  });
}

export function cleanInput (input: string): string[] {
  const x=input.toLowerCase();
  return x.split(" ").filter((s) => s.length>0);
}
