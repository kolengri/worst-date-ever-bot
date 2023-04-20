import {isNil as testFunc} from '../isNil'

describe(testFunc.name, () => {
    it('returns true for null', () => {
        expect(testFunc(null)).toBe(true)
    })

    it('returns true for undefined', () => {
        expect(testFunc(undefined)).toBe(true)
    })

    it('returns false for a string', () => {
        expect(testFunc('foo')).toBe(false)
    })

    it('returns false for a number', () => {
        expect(testFunc(42)).toBe(false)
    })
})
