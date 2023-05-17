const AreasController = require("./AreasController");
const AreasSearchService = require("./AreasSearchService");

describe("AreasController", () => {
  describe("readList", () => {
    it("should return a list of areas", async () => {
      const req = {
        query: {},
      };
      const res = {
        ok: jest.fn(),
      };
      const listAreas = [
        { prefecture_code: 13, city_code: 13101, region_code: 0 },
        { prefecture_code: 13, city_code: 13102, region_code: 0 },
      ];
      const areasOther = [
        { prefectureCode: 13, name: "Tokyo" },
        { prefectureCode: 14, name: "Kanagawa" },
      ];
      AreasSearchService.getAreasListHint = jest
        .fn()
        .mockReturnValue(listAreas);
      AreasSearchService.getAreasOther = jest.fn().mockReturnValue(areasOther);

      await AreasController.readList(req, res);

      expect(AreasSearchService.getAreasListHint).toHaveBeenCalledWith({});
      expect(AreasSearchService.getAreasOther).toHaveBeenCalled();
      expect(res.ok).toHaveBeenCalledWith(listAreas);
    });

    it("should return a list of areas for Tokyo Shibuya Hiroo", async () => {
      const req = {
        query: {
          prefName: "東京都",
          cityName: "渋谷区",
          regionName: "広尾",
        },
      };
      const res = {
        ok: jest.fn(),
      };
      const listAreas = [
        { prefecture_code: 13, city_code: 13101, region_code: 0 },
        { prefecture_code: 13, city_code: 13102, region_code: 0 },
      ];
      const areasOther = [
        { prefectureCode: 13, name: "Tokyo" },
        { prefectureCode: 14, name: "Kanagawa" },
      ];
      AreasSearchService.getAreasListHint = jest
        .fn()
        .mockReturnValue(listAreas);
      AreasSearchService.getAreasOther = jest.fn().mockReturnValue(areasOther);

      await AreasController.readList(req, res);

      expect(AreasSearchService.getAreasListHint).toHaveBeenCalledWith({
        prefName: "東京都",
        cityName: "渋谷区",
        regionName: "広尾",
      });
      expect(AreasSearchService.getAreasOther).toHaveBeenCalled();
      expect(res.ok).toHaveBeenCalledWith(listAreas);
    });

    it("should return a server error if an exception is thrown", async () => {
      const req = {};
      const res = {
        serverError: jest.fn(),
      };
      AreasSearchService.getAreasListHint = jest
        .fn()
        .mockRejectedValue(new Error());

      await AreasController.readList(req, res);

      expect(res.serverError).toHaveBeenCalled();
    });
  });
});
