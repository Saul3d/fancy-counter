import Sum from "./Sum.tsx";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(Sum({ num1: 1, num2: 2 })).toBe(3);
  });
});
