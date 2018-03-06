import React, { Component } from 'react'
import { Loader } from '../components'
import { connect } from 'react-redux'
import './styles.css'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const normalizeHour = index =>
  !(Array.from(index.toString()).length - 1)
    ? '0' + index
    : index

class App extends Component {

  componentWillMount = () => {
    const { data, fetch } = this.props
    if (!data.length) fetch()
  }

  render() {
    const { data } = this.props

    let cols = new Array(24 / 3)
          .fill(1)
          .map((v, index) => <td key={index} colSpan="3">{`${normalizeHour(index * 3)}:00`}</td>),

        content = data.map((day, dayIndex) =>
          <tr key={dayIndex}>
            <td>{days[dayIndex]}</td>
            <td></td>
            {day.map((value, hourIndex) => <td key={hourIndex}>{+value}</td>)}
          </tr>
        )

    return !data.length ? <Loader /> : (
      <div className="app">
        <h1>Schedule</h1>
        <table className="schedule">
          <thead>
            <tr>
              <td colSpan="2">
                All Days
              </td>
              {cols}
            </tr>
          </thead>
          <tbody>
            {content}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.calendar
  }),
  dispatch => ({
    fetch: () => dispatch({
      type: 'calendar/FETCH__START'
    })
  })
)(App)
