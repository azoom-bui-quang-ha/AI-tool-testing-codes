describe("Test the function that fetches staffs data from the server", () => {
  const mockReq = (params, user, query) => ({
    params,
    user,
    query,
  });

  const mockRes = () => {
    const res = {};
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  test("should return all staffs belonging to an organization if isGetAll is true", async () => {
    const req = mockReq(
      { organizationId: "123" },
      { email: "example@company.com" },
      { isGetAll: true }
    );
    const res = mockRes();
    await getStaffs(req, res);

    expect(res.send).toHaveBeenCalled();
    // Check the validity of the response data here
  });

  test("should return staffs data from mock file in development environment", async () => {
    process.env.NODE_ENV = "development";
    const req = mockReq({}, { email: "example@company.com" }, { id: "1" });
    const res = mockRes();
    await getStaffs(req, res);

    expect(res.send).toHaveBeenCalled();
    // Check the validity of the response data here
  });

  test("should return staffs data from API in production environment", async () => {
    process.env.NODE_ENV = "production";
    const req = mockReq(
      {},
      { email: "example@company.com" },
      { param1: "value1", param2: "value2" }
    );
    const res = mockRes();
    await getStaffs(req, res);

    expect(res.send).toHaveBeenCalled();
    // Check the validity of the response data here
  });
});
