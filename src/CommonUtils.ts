/**
 * Collection of utilities that are commonly used.
 */
export class CommonUtils {
  /**
   * Checks if an object is null or undefined.
   * If it is, return true.
   * If it is not, return false.
   * 
   * @param {object|null|undefined} obj Object to check.
   * @returns {boolean} True if the provided object is null or undefined. Otherwise, false.
   */
  static isNull(obj: object|null|undefined): boolean {
    return obj === null || obj === undefined;
  }

  /**
   * Removes spaces from a string.
   * 
   * @param {string} str String to remove spaces from.
   * @returns {string} String without spaces.
   */
  static removeSpaces(str: string): string {
    return str.replace(/\s/g, '');
  }
}
