const { update } = require("./locationAvailabletimerangeService");
const { LocationAvailabletimerange } = require("./models");

jest.mock("./models", () => ({
  LocationAvailabletimerange: {
    where: jest.fn(),
  },
}));

describe("update", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should throw error if type of parameters are missing", async () => {
    const availabletimerangeId = 1;
    const params = {
      timeClass: "1",
      openedAt: "Japanese",
      closedAt: "vietnamese",
      openedAtSaturday: "Test opened at saturday",
      closedAtSaturday: "Test closed at saturday",
      openedAtSunday: "Test opened at sunday",
      closedAtSunday: "Test closed at sunday",
    };
    await expect(update(availabletimerangeId, params)).rejects.toThrow(
      "Type of parameters are missing"
    );
  });

  it("should throw error if update record is not exist", async () => {
    const availabletimerangeId = 1;
    const params = {
      timeClass: 1,
      openedAt: "Japanese",
      closedAt: "vietnamese",
      openedAtSaturday: "Test opened at saturday",
      closedAtSaturday: "Test closed at saturday",
      openedAtSunday: "Test opened at sunday",
      closedAtSunday: "Test closed at sunday",
    };
    LocationAvailabletimerange.where.mockReturnValueOnce({
      save: jest.fn().mockResolvedValueOnce(0),
    });
    await expect(update(availabletimerangeId, params)).rejects.toThrow(
      "Update record does not exist"
    );
    expect(LocationAvailabletimerange.where).toHaveBeenCalledWith({
      id: availabletimerangeId,
    });
  });

  it("should update location available time range", async () => {
    const availabletimerangeId = 1;
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
      id: availabletimerangeId,
      ...params,
    };
    LocationAvailabletimerange.where.mockReturnValueOnce({
      save: jest.fn().mockResolvedValueOnce(1),
      toJSON: jest.fn().mockReturnValueOnce(expected),
    });
    const result = await update(availabletimerangeId, params);
    expect(result).toEqual(expected);
    expect(LocationAvailabletimerange.where).toHaveBeenCalledWith({
      id: availabletimerangeId,
    });
    expect(LocationAvailabletimerange.where().save).toHaveBeenCalledWith(
      snakecaseKeys(params),
      {
        method: "update",
        patch: true,
      }
    );
  });
});
