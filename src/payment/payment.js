import {createReadStream} from 'fs'
import {createInterface} from 'readline'
import {calculateCost} from './payment.utils.js'

export const readInterface = createInterface(
  {
    input: createReadStream('./config/register.txt')
  }
)

export const process = (line) => {
  const pre = line.split('=')
  const name = pre[0]
  const workScheduleList = pre[1].split(',')
  let total = 0
  workScheduleList.forEach(item => {
    total = total + calculateCost(item)
  })
  console.log('The amount to pay', name, 'is:', total)
}

export const readAndCalculate = () => {
  readInterface.on('line', function (line) {
    try {
      process(line)
    } catch (error) {
      console.error('ERROR: Please check config.js or register.txt files and try again:', error.name);
    }
  })
}