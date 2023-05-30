describe("create", () => {
  it("throw error if required parameters are missing", async () => {
    await expect(
      LocationAvailabletimerangesService.create({
        // missing timeClass parameter
        openedAtSunday: "Test opened at sunday",
        closedAtSunday: "Test closed at sunday",
      })
    ).rejects.toThrowError();
  });
  it("throw error if type of parameters are missing", async () => {
    // when parameter has the value undefined
    await expect(
      LocationAvailabletimerangesService.create({
        timeClass: undefined,
        openedAt: "Japanese",
        closedAt: "vietnamese",
        openedAtSaturday: "Test opened at saturday",
        closedAtSaturday: "Test closed at saturday",
        openedAtSunday: "Test opened at sunday",
        closedAtSunday: "Test closed at sunday",
      })
    ).rejects.toThrowError();
  });
  it("return created record with right required parameters", async () => {
    const createParams = {
      timeClass: 1,
      openedAt: "Japanese",
      closedAt: "vietnamese",
      openedAtSaturday: "Test opened at saturday",
      closedAtSaturday: "Test closed at saturday",
      openedAtSunday: "Test opened at sunday",
      closedAtSunday: "Test closed at sunday",
    };

    const locationAvailabletimerange =
      await LocationAvailabletimerangesService.create(createParams);

    const locationAvailabletimerangeResult =
      await LocationAvailabletimerangesService.getById(
        locationAvailabletimerange.id
      );

    expect(locationAvailabletimerangeResult).toEqual(
      expect.objectContaining(createParams)
    );
  });
});
