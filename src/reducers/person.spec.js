import person from './person'
import { person_en as defaultState } from '../resources/person'

describe('person reducer', () => {
  it('should handle initial state', () => {
    expect(
      person(undefined, {})
    ).toEqual(defaultState)
  })

})
