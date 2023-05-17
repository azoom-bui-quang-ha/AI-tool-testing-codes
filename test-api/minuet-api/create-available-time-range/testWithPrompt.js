const { create } = require("./locationAvailabletimerangeService");
const { LocationAvailabletimerange } = require("./models");

jest.mock("./models", () => ({
  LocationAvailabletimerange: {
    forge: jest.fn(),
  },
}));

describe("create", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should throw error if required parameters are missing", async () => {
    const params = {};
    await expect(create(params)).rejects.toThrow(
      "Required parameters are missing"
    );
  });

  it("should throw error if type of parameters are missing", async () => {
    const params = {
      timeClass: "1",
      openedAt: "Japanese",
      closedAt: "vietnamese",
      openedAtSaturday: "Test opened at saturday",
      closedAtSaturday: "Test closed at saturday",
      openedAtSunday: "Test opened at sunday",
      closedAtSunday: "Test closed at sunday",
    };
    await expect(create(params)).rejects.toThrow(
      "Type of parameters are missing"
    );
  });

  it("should create location available timerange", async () => {
    const params = {
      timeClass: 1,
      openedAt: "Japanese",
      closedAt: "vietnamese",
      openedAtSaturday: "Test opened at saturday",
      closedAtSaturday: "Test closed at saturday",
      openedAtSunday: "Test opened at sunday",
      closedAtSunday: "Test closed at sunday",
    };
    const expected = {
      id: 1,
      ...params,
    };
    LocationAvailabletimerange.forge.mockReturnValueOnce({
      save: jest.fn().mockResolvedValueOnce(expected),
      toJSON: jest.fn().mockReturnValueOnce(expected),
    });
    const result = await create(params);
    expect(result).toEqual(expected);
    expect(LocationAvailabletimerange.forge).toHaveBeenCalledWith(
      snakecaseKeys(params)
    );
  });

  it("should throw error if timeClass parameter is missing", async () => {
    const params = {
      openedAt: "Japanese",
      closedAt: "vietnamese",
      openedAtSaturday: "Test opened at saturday",
      closedAtSaturday: "Test closed at saturday",
      openedAtSunday: "Test opened at sunday",
      closedAtSunday: "Test closed at sunday",
    };
    await expect(create(params)).rejects.toThrow(
      "timeClass parameter is missing"
    );
  });
});
