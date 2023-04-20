/**
 * Returns true if a given value is a valid numeric string, e.g. '123', '0.1', '-2', '+3.14'
 * @param value A value to check
 * @returns true if the value is a valid numeric string, false otherwise
 */
export const isNumericString = (value: any): value is string => {
    return /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/.test(value)
}
