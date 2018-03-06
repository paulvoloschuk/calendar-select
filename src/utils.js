const indexConvert = value => Math.round(value / 60) - value % 2

export const fuckingDataTranspiler = data => {
  let result

  switch (typeof data) {

    // decode
    case 'object': {
      // construct
      result = new Array(7).fill(new Array(24).fill(false))
      // fill
      Object.values(data).forEach((dayData, dayIndex) =>
        Object.values(dayData).forEach(timeData =>
          result[dayIndex] = result[dayIndex].map((value, timeIndex) =>
            timeIndex >= indexConvert(timeData.bt) && timeIndex <= indexConvert(timeData.et) || value
          )
        )
      )

      break
    }

    // encode
    case 'array': {

      break
    }

  }

  return result
}
