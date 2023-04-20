import {isNull as testFunc} from '../isNull'

describe(testFunc.name, () => {
    it('returns true for null', () => {
        expect(testFunc(null)).toBe(true)
    })

    it('returns false for other values', () => {
        expect(testFunc(undefined)).toBe(false)
        expect(testFunc(0)).toBe(false)
        expect(testFunc('')).toBe(false)
        expect(testFunc({})).toBe(false)
        expect(testFunc([])).toBe(false)
        expect(testFunc(false)).toBe(false)
    })
})
