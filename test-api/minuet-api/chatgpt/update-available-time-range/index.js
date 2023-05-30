import camelCaseKeys from "camelcase-keys";
import { seed, deleteAll } from "@root/fixtures/fixtures";
import LocationAvailabletimerangesService from "@services/LocationAvailabletimerangesService";

describe("LocationAvailabletimerangesService", () => {
  beforeEach(async () => {
    await deleteAll("location_availabletimerange");
  });

  const sampleParams = {
    timeClass: 1,
    openedAt: "Japanese",
    closedAt: "vietnamese",
    openedAtSaturday: "Test opened at saturday",
    closedAtSaturday: "Test closed at saturday",
    openedAtSunday: "Test opened at sunday",
    closedAtSunday: "Test closed at sunday",
  };
  // write unit test using LocationAvailabletimerangesService.create only case: required parameters are missing, throw error if type of parameters are missing, return created record with right required parameters
});
