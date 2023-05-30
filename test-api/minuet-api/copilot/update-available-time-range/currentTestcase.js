import camelCaseKeys from 'camelcase-keys'
import { seed, deleteAll } from '@root/fixtures/fixtures'
import LocationAvailabletimerangesService from '@services/LocationAvailabletimerangesService'

describe('LocationAvailabletimerangesService', () => {
  beforeEach(async () => {
    await deleteAll('location_availabletimerange')
  })

  describe('update', () => {
    it('throw error if type of parameters are missing', async () => {
      const [seedLocationAvailabletimerangeModel] = (await seed(
        'location_availabletimerange',
        1
      )).map(model => model.toJSON())

      // when timeClass parameter is string
      await expect(
        LocationAvailabletimerangesService.update(
          seedLocationAvailabletimerangeModel.id,
          {
            timeClass: 'Test time class',
            openedAt: 'Japanese',
            closedAt: 'vietnamese',
            openedAtSaturday: 'Test opened at saturday',
            closedAtSaturday: 'Test closed at saturday',
            openedAtSunday: 'Test opened at sunday',
            closedAtSunday: 'Test closed at sunday'
          }
        )
      ).rejects.toThrowError()
    })
    it('throw error if update record is not exist', async () => {
      const nonexistentId = -1

      await expect(
        LocationAvailabletimerangesService.update(nonexistentId)
      ).rejects.toThrowError()
    })
    it('return updated record with right required parameters', async () => {
      const [seedLocationAvailabletimerangeModel] = (await seed(
        'location_availabletimerange',
        1
      )).map(value => value.toJSON())

      const updateParams = {
        timeClass: 1,
        openedAt: 'Japanese',
        closedAt: 'vietnamese',
        openedAtSaturday: 'Test opened at saturday',
        closedAtSaturday: 'Test closed at saturday',
        openedAtSunday: 'Test opened at sunday',
        closedAtSunday: 'Test closed at sunday'
      }

      await LocationAvailabletimerangesService.update(
        seedLocationAvailabletimerangeModel.id,
        updateParams
      )

      const locationAvailabletimerangeResult = await LocationAvailabletimerangesService.getById(
        seedLocationAvailabletimerangeModel.id
      )

      expect(locationAvailabletimerangeResult).toEqual(
        expect.objectContaining(updateParams)
      )
    })
  })
