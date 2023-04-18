// 7/8 cases are return
describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// 1 cases are return
describe("sum", () => {
  it("should return the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("should return the sum of two negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
