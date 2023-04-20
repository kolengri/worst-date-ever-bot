/**
 * Type guard function to check if a value is undefined
 * @param value - The value to check
 * @returns - True if the value is undefined, false otherwise
 */
export function isUndefined(value: unknown): value is undefined {
    return typeof value === 'undefined'
}
