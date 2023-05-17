import { generateUrl } from "./file-path";

describe("generateUrl", () => {
  it("should return a string with the default parameters", () => {
    expect(generateUrl()).toEqual("http://localhost:3000/invoices");
  });

  it("should generate a URL with the provided search parameters", () => {
    const params = { name: "John Doe", age: "30", city: "New York" };
    expect(generateUrl(params)).toEqual(
      "http://localhost:3000/invoices?name=John%20Doe&age=30&city=New%20York"
    );
  });

  it("should work with different path and origin", () => {
    const params = { status: "paid" };
    const path = "orders";
    const origin = "https://api.example.com";
    expect(generateUrl(params, path, origin)).toEqual(
      "https://api.example.com/orders?status=paid"
    );
  });
});
