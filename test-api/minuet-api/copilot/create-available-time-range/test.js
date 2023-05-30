import camelCaseKeys from "camelcase-keys";
import { seed, deleteAll } from "@root/fixtures/fixtures";
import LocationAvailabletimerangesService from "@services/LocationAvailabletimerangesService";

describe("LocationAvailabletimerangesService", () => {
  beforeEach(async () => {
    await deleteAll("location_availabletimerange");
  });

  const sampleParams = {
    timeClass: 1, // only timeClass required, number only
    openedAt: "Japanese",
    closedAt: "vietnamese",
    openedAtSaturday: "Test opened at saturday",
    closedAtSaturday: "Test closed at saturday",
    openedAtSunday: "Test opened at sunday",
    closedAtSunday: "Test closed at sunday",
  };
  // write unit test using LocationAvailabletimerangesService.create only case: required parameters are missing, throw error if type of parameters are missing, return created record with right required parameters
  describe("create", () => {
    it("should throw error if required parameters are missing", async () => {
      const params = {};
      await expect(
        LocationAvailabletimerangesService.create(params)
      ).rejects.toThrow();
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
      await expect(
        LocationAvailabletimerangesService.create(params)
      ).rejects.toThrow();
    });

    it("should return created record with right required parameters", async () => {
      const params = sampleParams;
      const record = await LocationAvailabletimerangesService.create(params);

      expect(record).toHaveProperty("id");
      expect(record).toHaveProperty("timeClass");
      expect(record).toHaveProperty("openedAt");
      expect(record).toHaveProperty("closedAt");
      expect(record).toHaveProperty("openedAtSaturday");
      expect(record).toHaveProperty("closedAtSaturday");
      expect(record).toHaveProperty("openedAtSunday");
      expect(record).toHaveProperty("closedAtSunday");
    });
  });
});
