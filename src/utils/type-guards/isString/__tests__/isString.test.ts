import {isString as testFunc} from '../isString'

describe(testFunc.name, () => {
    it('should return true for string values', () => {
        expect(testFunc('hello')).toBe(true)
        expect(testFunc('')).toBe(true)
    })

    it('should return false for non-string values', () => {
        expect(testFunc(undefined)).toBe(false)
        expect(testFunc(null)).toBe(false)
        expect(testFunc(42)).toBe(false)
        expect(testFunc({})).toBe(false)
        expect(testFunc([])).toBe(false)
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        expect(testFunc(() => {})).toBe(false)
    })
})
