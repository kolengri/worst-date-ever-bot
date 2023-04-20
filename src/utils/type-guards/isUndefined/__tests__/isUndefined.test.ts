import {isUndefined as testFunc} from '../isUndefined'

describe(testFunc.name, () => {
    it('returns true for undefined', () => {
        expect(testFunc(undefined)).toBe(true)
    })

    it('returns false for null', () => {
        expect(testFunc(null)).toBe(false)
    })

    it('returns false for other values', () => {
        expect(testFunc(0)).toBe(false)
        expect(testFunc('')).toBe(false)
        expect(testFunc({})).toBe(false)
    })
})
