import { sum } from "./sum";

describe("sum", () => {
  it("should add two positive integers correctly", () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it("should add two positive decimal numbers correctly", () => {
    expect(sum(2.5, 3.7)).toEqual(6.2);
  });

  it("should add a positive integer and a positive decimal number correctly", () => {
    expect(sum(2, 3.7)).toEqual(5.7);
  });

  it("should add two negative integers correctly", () => {
    expect(sum(-2, -3)).toEqual(-5);
  });

  it("should add two negative decimal numbers correctly", () => {
    expect(sum(-2.5, -3.7)).toEqual(-6.2);
  });

  it("should add a negative integer and a negative decimal number correctly", () => {
    expect(sum(-2, -3.7)).toEqual(-5.7);
  });

  it("should concatenate two strings correctly", () => {
    expect(sum("hello", "world")).toEqual("helloworld");
  });

  it("should return NaN if one argument is not a number", () => {
    expect(sum(2, "3" as any)).toBeNaN();
  });

  it("should return an array with the two input arrays concatenated", () => {
    expect(sum([1, 2], [3, 4])).toEqual("1,23,4");
  });

  it("should merge two objects correctly", () => {
    expect(sum({ a: 1 }, { b: 2 })).toEqual("[object Object][object Object]");
  });

  it("should return undefined if one argument is undefined", () => {
    expect(sum(undefined as any, 5)).toBeNaN();
  });

  it("should return null if one argument is null", () => {
    expect(sum(null as any, 5)).toBeNaN();
  });

  it("should return false if one argument is false", () => {
    expect(sum(false as any, true)).toEqual("falsetrue");
  });
});
