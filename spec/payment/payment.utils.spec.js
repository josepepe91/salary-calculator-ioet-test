import * as paymentUtils from '../../src/payment/payment.utils.js'

describe('payment.utils', function () {
  it('transform to minutes must return an object', function () {
    expect(paymentUtils.transformToMinutes(['10:00', '12:00'])).toEqual({minutesInit: 600, minutesEnd: 720})
  })

  it('calculateItemCost must return the total cost', function () {
    expect(paymentUtils.calculateItemCost(480, 1260, {
      days: ['MO', 'TU', 'WE', 'TH', 'FR'],
      costs: [
        {hours: '00:00-09:00', cost: 25},
        {hours: '09:00-18:00', cost: 15},
        {hours: '18:00-00:00', cost: 20}
      ]
    })).toBe(220)
  })

  it('calculateCost must return 0 when config doesn`t have the day given', function () {
    expect(paymentUtils.calculateCost('SU20:00-21:00', [
      {
        'days': [
          'MO',
        ],
      }])).toBe(0)
  })
})