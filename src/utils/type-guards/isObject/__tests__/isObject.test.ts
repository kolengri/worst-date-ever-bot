import {isObject as testFunc} from '../isObject'

describe(testFunc.name, () => {
    it('should return true for objects', () => {
        expect(testFunc({})).toBe(true)
        expect(testFunc({key: 'value'})).toBe(true)
    })

    it('should return false for non-objects', () => {
        expect(testFunc(null)).toBe(false)
        expect(testFunc([])).toBe(false)
        expect(testFunc(undefined)).toBe(false)
        expect(testFunc(123)).toBe(false)
        expect(testFunc('hello')).toBe(false)
        expect(testFunc(Symbol('test'))).toBe(false)
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        expect(testFunc(() => {})).toBe(false)
    })
})
