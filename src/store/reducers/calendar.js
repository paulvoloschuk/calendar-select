import { fuckingDataTranspiler } from '../../utils'

// calendar matrix
const initialState = []

const REDUCER = 'calendar'

// reducer
export default (state = initialState, { type, payload }) => {

  switch (type) {
    case REDUCER + '/FETCH__SUCCESS': {
      state = fuckingDataTranspiler(payload)
      break
    }
  }


  return [...state]
}
