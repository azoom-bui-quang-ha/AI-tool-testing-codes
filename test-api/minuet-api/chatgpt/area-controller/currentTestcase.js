describe("AreasController", () => {
  describe("GET /areas", () => {
    it("reach /areas", async () => {
      const response = await server.get(`/areas`);
      expect(response.status).toEqual(200);
      expect(response.body).toEqual([
        {
          areaGroupId: null,
          cityCode: 0,
          cityName: null,
          id: 0,
          prefectureCode: 0,
          prefectureName: "その他",
          regionCode: 0,
          regionName: null,
        },
      ]);
    });

    it("get areas info of tokyo", async () => {
      const response = await server.get(
        `/areas?prefName=${encodeURI("東京都")}&cityName=${encodeURI(
          "渋谷区"
        )}&regionName=${encodeURI("広尾")}`
      );
      expect(response.status).toEqual(200);
    });
  });
});
