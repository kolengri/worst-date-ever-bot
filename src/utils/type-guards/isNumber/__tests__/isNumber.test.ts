import {isNumber as testFunc} from '../isNumber'

describe(testFunc.name, () => {
    it('should return true for number values', () => {
        expect(testFunc(42)).toBe(true)
        expect(testFunc(3.14)).toBe(true)
        expect(testFunc(Infinity)).toBe(true)
    })

    it('should return false for non-number values', () => {
        expect(testFunc(undefined)).toBe(false)
        expect(testFunc(null)).toBe(false)
        expect(testFunc('42')).toBe(false)
        expect(testFunc('3.14')).toBe(false)
        expect(testFunc({})).toBe(false)
        expect(testFunc([])).toBe(false)
        expect(testFunc(NaN)).toBe(false)
    })
})
