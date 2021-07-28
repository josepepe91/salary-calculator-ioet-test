import {createReadStream} from 'fs'
import {createInterface} from 'readline'
import {calculateCost} from './payment.utils.js'

const readInterface = createInterface(
  {
    input: createReadStream('./config/register.txt')
  }
)

export const process = (line) => {
  try {
    const pre = line.split('=')
    const name = pre[0]
    const workScheduleList = pre[1].split(',')
    let total = 0
    workScheduleList.forEach(item => {
      total = total + calculateCost(item)
    })
    return 'The amount to pay ' + name + ' is: ' + total
  } catch (error) {
    console.error('ERROR: Please check config.js or register.txt files and try again:', error.name)
    return error.name
  }
}

export const readAndCalculate = () => {
  readInterface.on('line', function (line) {
    try {
      console.log(process(line))
    } catch (error) {
      return error
    }
  })
}