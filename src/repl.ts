//can import directly bc of "type": "module" in package.json
import { createInterface } from "readline";

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
      console.log(`Your command was: ${x[0]}`);
    }
    rl.prompt();
  });
}

export function cleanInput (input: string): string[] {
  const x=input.toLowerCase();
  return x.split(" ").filter((s) => s.length>0);
}
