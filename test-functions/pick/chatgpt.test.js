describe("pick function", () => {
  it("returns the source if source is not an object", () => {
    const result = pick("string", { props: ["testProp"] });
    expect(result).toEqual("string");
  });

  it("returns deep cloned source if props array is empty", () => {
    const source = {
      testProp: "test value",
      nestedProp: {
        nestedValue: "test value",
      },
    };
    const result = pick(source, { props: [] });
    expect(result).toEqual(source);
    expect(result).not.toBe(source);
  });

  it("returns object with only specified props", () => {
    const source = {
      testProp: "test value",
      nestedProp: {
        nestedValue: "test value",
      },
    };
    const result = pick(source, { props: ["testProp"] });
    expect(result).toEqual({ testProp: "test value" });
  });

  it("returns object with only specified props and convert them", () => {
    const source = {
      testProp: "test value",
      nestedProp: {
        nestedValue: "test value",
      },
    };
    const result = pick(source, {
      props: ["testProp", "nestedProp"],
      converter: (selectedProps) => {
        return { editedProp: selectedProps.testProp.toUpperCase() };
      },
    });
    expect(result).toEqual({ editedProp: "TEST VALUE" });
  });
});
