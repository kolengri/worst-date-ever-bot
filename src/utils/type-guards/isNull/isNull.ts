/**
 * Checks if a value is a number.
 * @param value - The value to check.
 * @returns True if the value is a null, false otherwise.
 */
export function isNull(value: unknown): value is null {
    return value === null
}
