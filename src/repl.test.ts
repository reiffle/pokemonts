import {cleanInput} from "./repl";
import {describe, expect, test} from "vitest";

describe.each([
  {
    input: " Hello world   ",
    expected: ["hello", "world"],
  },

  {
    input: "ZIggYPOp is   THE  DUde    ",
    expected: ["ziggypop", "is", "the", "dude"],
  },
])("cleanInput($input)", ({input, expected}) => { 
  test(`Expected: ${expected}`, () => {
    const actual=cleanInput(input);
    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});
