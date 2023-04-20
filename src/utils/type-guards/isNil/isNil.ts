import {isUndefined} from '../isUndefined'
import {isNull} from '../isNull'

/**
 * Checks if a value is null or undefined
 * @param value - The value to check
 * @returns - Whether the value is null or undefined
 */
export function isNil(value: unknown): value is null | undefined {
    return isNull(value) || isUndefined(value)
}
