import * as colors from '../common/colors'

export const defaultState = {
  locale: "en",
  color: colors["blue"]
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_LOCALE":
      return Object.assign({}, state, {locale: action.locale})
    default:
      return state
  }
}

export default app
