import camelCaseKeys from 'camelcase-keys'
import { seed, deleteAll } from '@root/fixtures/fixtures'
import LocationAvailabletimerangesService from '@services/LocationAvailabletimerangesService'

describe('LocationAvailabletimerangesService', () => {
  beforeEach(async () => {
    await deleteAll('location_availabletimerange')
  })

  const sampleParams = {
    timeClass: 1, // number only, required
    openedAt: 'Japanese',
    closedAt: 'vietnamese',
    openedAtSaturday: 'Test opened at saturday',
    closedAtSaturday: 'Test closed at saturday',
    openedAtSunday: 'Test opened at sunday',
    closedAtSunday: 'Test closed at sunday'
  }
  // write unit test using LocationAvailabletimerangesService.update(id, {params}) only case: required parameters are missing, throw error if type of parameters are missing, throw error if update record is not exist(using LocationAvailabletimerangesService.getById to get record), return created record with right required parameters (using LocationAvailabletimerangesService.getById to get record)
  describe('update', () => {
    it('should throw error if required parameters are missing', async () => {
      await expect(
        LocationAvailabletimerangesService.update(1, {})
      ).rejects.toThrow()
    })

    it('should throw error if type of parameters are missing', async () => {
      await expect(
        LocationAvailabletimerangesService.update(1, {
          ...sampleParams,
          timeClass: 'abc'
        })
      ).rejects.toThrow()
    })

    it('should throw error if update record is not exist', async () => {
      await expect(
        LocationAvailabletimerangesService.update(1, sampleParams)
      ).rejects.toThrow()
    })

    it('should return created record with right required parameters', async () => {
      const location = await seed('location_availabletimerange', {
        time_class: 1
      })
      const result = await LocationAvailabletimerangesService.update(
        location.id,
        sampleParams
      )

      expect(result).toEqual(
        expect.objectContaining({
          id: location.id,
          timeClass: sampleParams.timeClass,
          openedAt: sampleParams.openedAt,
          closedAt: sampleParams.closedAt,
          openedAtSaturday: sampleParams.openedAtSaturday,
          closedAtSaturday: sampleParams.closedAtSaturday,
          openedAtSunday: sampleParams.openedAtSunday,
          closedAtSunday: sampleParams.closedAtSunday
        })
      )
    })
  })

  // write unit test using LocationAvailabletimerangesService.getById(id) only case: return record if record is exist, throw error if record is not exist
  describe('getById', () => {
    it('should return record if record is exist', async () => {
      const location = await seed('location_availabletimerange', {
        time_class: 1
      })
      const result = await LocationAvailabletimerangesService.getById(
        location.id
      )

      expect(result).toEqual(
        expect.objectContaining({
          id: location.id,
          timeClass: location.time_class,
          openedAt: location.opened_at,
          closedAt: location.closed_at,
          openedAtSaturday: location.opened_at_saturday,
          closedAtSaturday: location.closed_at_saturday,
          openedAtSunday: location.opened_at_sunday,
          closedAtSunday: location.closed_at_sunday
        })
      )
    })

    it('should throw error if record is not exist', async () => {
      await expect(
        LocationAvailabletimerangesService.getById(1)
      ).rejects.toThrow()
    })
  })

  // write unit test using LocationAvailabletimerangesService.create({params}) only case: required parameters are missing, throw error if type of parameters are missing, return created record with right required parameters
  describe('create', () => {
    it('should throw error if required parameters are missing', async () => {
      await expect(
        LocationAvailabletimerangesService.create({})
      ).rejects.toThrow()
    })

    it('should throw error if type of parameters are missing', async () => {
      await expect(
        LocationAvailabletimerangesService.create({
          timeClass: 'abc'
        })
      ).rejects.toThrow()
    })

    it('should return created record with right required parameters', async () => {
      const result = await LocationAvailabletimerangesService.create(
        sampleParams
      )

      expect(result).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          timeClass: sampleParams.timeClass,
          openedAt: sampleParams.openedAt,
          closedAt: sampleParams.closedAt,
          openedAtSaturday: sampleParams.openedAtSaturday,
          closedAtSaturday: sampleParams.closedAtSaturday,
          openedAtSunday: sampleParams.openedAtSunday,
          closedAtSunday: sampleParams.closedAtSunday
        })
      )
    })
  })
