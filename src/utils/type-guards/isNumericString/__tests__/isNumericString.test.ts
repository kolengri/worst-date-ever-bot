import {isNumericString} from '../isNumericString'

describe(isNumericString.name, () => {
    it('returns true for positive integer', () => {
        expect(isNumericString('123')).toBe(true)
        expect(isNumericString('004')).toBe(true)
        expect(isNumericString('+123')).toBe(true)
        expect(isNumericString(123)).toBe(true)
    })

    it('returns true for negative integer', () => {
        expect(isNumericString('-123')).toBe(true)
        expect(isNumericString('-004')).toBe(true)
        expect(isNumericString(-123)).toBe(true)
    })

    it('returns true for positive decimal', () => {
        expect(isNumericString('123.45')).toBe(true)
        expect(isNumericString('+8.62')).toBe(true)
        expect(isNumericString(123.45)).toBe(true)
    })

    it('returns true for negative decimal', () => {
        expect(isNumericString('-123.45')).toBe(true)
        expect(isNumericString('-8.62')).toBe(true)
    })

    it('returns false for invalid number format', () => {
        expect(isNumericString('123,45')).toBe(false)
        expect(isNumericString('123abc')).toBe(false)
        expect(isNumericString('abc123')).toBe(false)
        expect(isNumericString('1-2-3')).toBe(false)
    })

    it('returns false for non-string input', () => {
        expect(isNumericString(null)).toBe(false)
        expect(isNumericString(undefined)).toBe(false)
        expect(isNumericString({})).toBe(false)
        expect(isNumericString([])).toBe(false)
        expect(isNumericString('')).toBe(false)
    })
})
