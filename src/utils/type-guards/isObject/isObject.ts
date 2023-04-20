/**
 *  Type guard to check if a given variable is an object
 * @param value
 * @returns
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
}
