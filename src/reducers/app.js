import * as colors from '../common/colors'

export const defaultState = {
  locale: "en",
  color: colors["indigo"]
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default app
