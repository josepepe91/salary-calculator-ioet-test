import * as payment from '../../src/payment/payment.js'

describe('payment', function () {
  it('"process" must return amount to pay', function () {
    expect(payment.process('JOSE=MO08:00-21:00')).toBe('The amount to pay JOSE is: 220')
  })

  it('process must return error type', function () {
    expect(payment.process('JO234323d')).toBe('TypeError')
  })
})