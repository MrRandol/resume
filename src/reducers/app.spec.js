import app, { defaultState } from './app'

describe('app reducer', () => {
  it('should handle initial state', () => {
    expect(
      app(undefined, {})
    ).toEqual(defaultState)
  })
})
