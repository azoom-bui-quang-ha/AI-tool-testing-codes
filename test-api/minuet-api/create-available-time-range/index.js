  /**
   * Create location availabletimerange
   * @param params Parameters to create location availabletimerange
   * @returns {Promise<LocationAvailabletimerange>}
   * throw error if required parameters are missing
   * throw error if type of parameters are missing
   * return created record with right required parameters
   * Sample params:
   * {
        timeClass: 1, // required
        openedAt: 'Japanese',
        closedAt: 'vietnamese',
        openedAtSaturday: 'Test opened at saturday',
        closedAtSaturday: 'Test closed at saturday',
        openedAtSunday: 'Test opened at sunday',
        closedAtSunday: 'Test closed at sunday'
      }
   */
  async create(params = {}, trx) {
    const locationAvailabletimerangeModel = await LocationAvailabletimerange.forge(
      snakecaseKeys(params)
    ).save(null, { transacting: trx })

    return locationAvailabletimerangeModel.toJSON()
  }
