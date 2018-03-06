import axios from 'axios'

const REDUCER = 'calendar'

export default ({ dispatch, getState }) => next => ({ type, payload }) => {
  const state = getState()

  if (type === REDUCER + '/FETCH__START')
    axios
      .get('/api/data.json')
      .then(({data : payload}) => dispatch({
        type: REDUCER + '/FETCH__SUCCESS',
        payload
      }))

  next({ type, payload })
}
