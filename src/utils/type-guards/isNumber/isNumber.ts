/**
 * Checks if a value is a number.
 * @param value - The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export const isNumber = (value: unknown): value is number => {
    return typeof value === 'number' && !isNaN(value)
}
