describe("pick", () => {
  it("should return empty object if source is not an object", () => {
    expect(pick(null, {})).toEqual({});
    expect(pick(1, {})).toEqual({});
    expect(pick(undefined, {})).toEqual({});
    expect(pick("", {})).toEqual({});
  });

  it("should return the same object if no props are provided", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(pick(source, {})).toEqual(source);
  });

  it("should return the same object if props are not provided", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(pick(source)).toEqual(source);
  });

  it("should return the same object if props is not an array", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(pick(source, { props: 1 })).toEqual(source);
    expect(pick(source, { props: null })).toEqual(source);
    expect(pick(source, { props: undefined })).toEqual(source);
    expect(pick(source, { props: {} })).toEqual(source);
  });

  it("should return the same object if props is an empty array", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(pick(source, { props: [] })).toEqual(source);
  });

  it("should return a new object with the selected props", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(pick(source, { props: ["a"] })).toEqual({ a: 1 });
    expect(pick(source, { props: ["b"] })).toEqual({ b: 2 });
    expect(pick(source, { props: ["c"] })).toEqual({ c: 3 });
    expect(pick(source, { props: ["a", "b"] })).toEqual({ a: 1, b: 2 });
    expect(pick(source, { props: ["a", "c"] })).toEqual({ a: 1, c: 3 });
    expect(pick(source, { props: ["b", "c"] })).toEqual({ b: 2, c: 3 });
  });
});
