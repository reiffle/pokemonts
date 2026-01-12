export function cleanInput (input: string): string[] {
  const x=input.toLowerCase();
  return x.split(" ").filter((s) => s.length>0);
}
