
const { sum, subtract, multiply, divide, factorial } = require('../index.js')

it('should add 2 numbers correctly', () => {
    const result = sum(4, 6)
    expect(result).toBe(10)
    
})

it('should subtract 2 numbers correctly', () => {
    const result = subtract(6, 6)
    expect(result).toBe(0)
    
})

it('should multiply 2 numbers correctly', () => {
    const result = multiply(4, 6)
    expect(result).toBe(24)
    
})

it('should divide 2 numbers correctly', () => {
    const result = divide(6, 6)
    expect(result).toBe(1)
})

describe('Should do factorial', () => {
    it("should throw an erro if the n in factorial is negative", () => {
        expect(() => factorial(-1)).toThrow('Factorial is not defined for negative numbers')
    })
    it("should return 1 if n of factorial is zero", () => {
        expect(factorial(0)).toBe(1)
    })
    it("should return the factorial if n is positive", () => {
        expect(factorial(5)).toBe(120)
    })
})