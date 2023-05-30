// write unit test for area controller
// api GET /areas
// api GET /areas with prefName=東京都, cityName=渋谷区, regionName=広尾

describe("GET /areas", () => {
  it("should return 200 OK", async () => {
    const res = await server.get("/areas");

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("areas");
  });
});

describe("GET /areas with prefName=東京都, cityName=渋谷区, regionName=広尾", () => {
  it("should return 200 OK", async () => {
    const res = await server.get(
      "/areas?prefName=東京都&cityName=渋谷区&regionName=広尾"
    );

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("areas");
  });
});

describe("GET /areas with prefName=東京都, cityName=渋谷区", () => {
  it("should return 200 OK", async () => {
    const res = await server.get("/areas?prefName=東京都&cityName=渋谷区");

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("areas");
  });
});

describe("GET /areas with prefName=東京都", () => {
  it("should return 200 OK", async () => {
    const res = await server.get("/areas?prefName=東京都");

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("areas");
  });
});

describe("GET /areas with cityName=渋谷区", () => {
  it("should return 200 OK", async () => {
    const res = await server.get("/areas?cityName=渋谷区");

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("areas");
  });
});

describe("GET /areas with regionName=広尾", () => {
  it("should return 200 OK", async () => {
    const res = await server.get("/areas?regionName=広尾");

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("areas");
  });
});
