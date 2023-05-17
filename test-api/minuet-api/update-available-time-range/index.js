  /**
   * Update location available time range
   * @param availabletimerangeId Available time range id
   * @param params Parameters to update location availabletimerange
   * @returns {Promise<LocationAvailabletimerange>}
   * throw error if type of parameters are missing
   * throw error if update record is not exist
   *  {
        timeClass: 1,
        openedAt: 'Japanese',
        closedAt: 'vietnamese',
        openedAtSaturday: 'Test opened at saturday',
        closedAtSaturday: 'Test closed at saturday',
        openedAtSunday: 'Test opened at sunday',
        closedAtSunday: 'Test closed at sunday'
      }
   */
  async update(availabletimerangeId, params = {}, trx) {
    const locationAvailabletimerangeModel = await LocationAvailabletimerange.where(
      {
        id: availabletimerangeId
      }
    ).save(snakecaseKeys(params), {
      method: 'update',
      patch: true,
      transacting: trx
    })

    return locationAvailabletimerangeModel.toJSON()
  }
