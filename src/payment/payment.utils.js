import {configurations} from '../../config/config.js'

export const transformToMinutes = (hours) => {
  const segmentsInit = hours[0].split(':')
  const segmentsEnd = hours[1].split(':')
  return {
    minutesInit: (+segmentsInit[0] * 60) + (+segmentsInit[1]),
    minutesEnd: ((+segmentsEnd[0] * 60) + (+segmentsEnd[1])) || 1440
  }
}

export const calculateItemCost = (minutesInit, minutesEnd, item) => {
  let cost = 0
  item.costs.forEach(item => {
    const {minutesInit: a, minutesEnd: b} = transformToMinutes(item.hours.split('-'))
    if (minutesInit <= a && minutesEnd >= b) {
      cost = cost + ((b - a) / 60) * item.cost
    }
    if (minutesInit >= a && minutesEnd <= b) {
      cost = cost + ((minutesEnd - minutesInit) / 60) * item.cost
    }
    if (minutesInit >= a && minutesInit < b && minutesEnd > b) {
      cost = cost + ((b - minutesInit) / 60) * item.cost
    }
    if (minutesInit < a && minutesEnd <= b && minutesEnd > a) {
      cost = cost + ((minutesEnd - a) / 60) * item.cost
    }
  })
  console.log('return', cost)
  return cost
}

export const calculateCost = (schedule, config = configurations) => {
  console.log('calculateCost',schedule)
  const day = schedule.slice(0, 2)
  const hours = schedule.slice(2).split('-')
  const {minutesInit, minutesEnd} = transformToMinutes(hours)
  for (let i = 0; i < config.length; i++) {
    const item = config[i]
    if (item.days.includes(day)) {
      return calculateItemCost(minutesInit, minutesEnd, item)
    }
  }
  return 0
}