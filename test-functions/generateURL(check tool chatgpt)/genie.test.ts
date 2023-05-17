import { generateUrl } from "./generateUrl";

describe("generateUrl", () => {
  it("should return a URL string with default parameters", () => {
    const expected = "https://example.com/invoices";
    expect(generateUrl()).toEqual(expected);
  });

  it("should return a URL string with custom path and origin", () => {
    const expected = "https://example.com/orders";
    expect(generateUrl({}, "orders", "https://example.com")).toEqual(expected);
  });

  it("should return a URL string with query parameters", () => {
    const expected = "https://example.com/invoices?status=paid&year=2021";
    expect(generateUrl({ status: "paid", year: "2021" })).toEqual(expected);
  });

  it("should handle special characters in query parameters", () => {
    const expected = "https://example.com/invoices?q=%23%26%3D";
    expect(generateUrl({ q: "#&=" })).toEqual(expected);
  });

  it("should handle empty query parameters", () => {
    const expected = "https://example.com/invoices?empty=";
    expect(generateUrl({ empty: "" })).toEqual(expected);
  });

  it("should handle undefined query parameters", () => {
    const expected = "https://example.com/invoices";
    expect(generateUrl({ undefinedParam: undefined })).toEqual(expected);
  });

  it("should handle null query parameters", () => {
    const expected = "https://example.com/invoices?nullParam=";
    expect(generateUrl({ nullParam: null })).toEqual(expected);
  });
});
