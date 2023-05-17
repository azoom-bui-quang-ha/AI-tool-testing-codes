class AreasController {
  /**
   * 複数エリアの情報を取得する
   * @param req
   * @param res
   * @returns {Promise<*>}
   * write test cases:
   * - GET /areas
   * - get areas info of tokyo with prefName=東京都, cityName=渋谷区, regionName=広尾
   */
  async readList(req, res) {
    try {
      const { prefName, cityName, regionName } = req.query;

      let [listAreas, areasOther] = await Promise.all([
        AreasSearchService.getAreasListHint({
          prefName: prefName,
          cityName: cityName,
          regionName: regionName,
        }),
        AreasSearchService.getAreasOther(),
      ]);

      Object.keys(listAreas).forEach(function (areasKey) {
        if (
          listAreas[areasKey].city_code === 0 &&
          listAreas[areasKey].region_code === 0
        ) {
          const other = areasOther.filter(
            (areas) =>
              areas.prefectureCode === listAreas[areasKey].prefecture_code
          );
          if (other.length > 0) {
            listAreas[areasKey].prefecture_name = other[0].name;
            listAreas[areasKey].city_name = "";
            listAreas[areasKey].region_name = "";
          }
        }
      });
      return response.ok(res, listAreas);
    } catch (e) {
      return response.serverError(e, req, res);
    }
  }
}
