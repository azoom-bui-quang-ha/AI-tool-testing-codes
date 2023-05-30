import LocationAvailabletimerangesService from "@services/LocationAvailabletimerangesService";
import { seed, deleteAll } from "@root/fixtures/fixtures";

describe("LocationAvailabletimerangesService", () => {
  beforeEach(async () => {
    await deleteAll("location_availabletimerange");
    await seed("location_availabletimerange", [
      {
        id: 1,
        time_class: 1,
        opened_at: "Japanese",
        closed_at: "vietnamese",
        opened_at_saturday: "Test opened at saturday",
        closed_at_saturday: "Test closed at saturday",
        opened_at_sunday: "Test opened at sunday",
        closed_at_sunday: "Test closed at sunday",
      },
    ]);
  });

  describe("update", () => {
    it("should throw an error if required parameters are missing", async () => {
      // Arrange
      const id = 1;
      const params = {};

      // Act & Assert
      await expect(
        LocationAvailabletimerangesService.update(id, params)
      ).rejects.toThrow();
    });

    it("should throw an error if type of parameters are missing", async () => {
      // Arrange
      const id = 1;
      const params = {
        timeClass: "not a number",
      };

      // Act & Assert
      await expect(
        LocationAvailabletimerangesService.update(id, params)
      ).rejects.toThrow();
    });

    it("should throw an error if update record is not exist", async () => {
      // Arrange
      const id = 2;
      const params = sampleParams;

      // Act & Assert
      await expect(
        LocationAvailabletimerangesService.update(id, params)
      ).rejects.toThrow();
    });

    it("should return created record with right required parameters", async () => {
      // Arrange
      const id = 1;
      const params = sampleParams;

      // Act
      const result = await LocationAvailabletimerangesService.update(
        id,
        params
      );

      // Assert
      expect(result).toMatchObject({
        id: 1,
        time_class: 1,
        opened_at: "Japanese",
        closed_at: "vietnamese",
        opened_at_saturday: "Test opened at saturday",
        closed_at_saturday: "Test closed at saturday",
        opened_at_sunday: "Test opened at sunday",
        closed_at_sunday: "Test closed at sunday",
      });
    });
  });
});
