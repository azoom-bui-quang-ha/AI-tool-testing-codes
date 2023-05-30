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

  it("should create location available time range", async () => {
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
    expect(LocationAvailabletimerange.forge().save).toHaveBeenCalledWith(null, {
      transacting: undefined,
    });
  });
});
