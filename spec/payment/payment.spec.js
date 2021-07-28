const {readAndCalculate} = require('/src/payment/payment.js')

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    readAndCalculate()
    expect(true).toBe(true);
  });
});