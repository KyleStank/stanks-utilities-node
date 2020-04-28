/**
 * Collection of utilities that are commonly used.
 */
export declare class CommonUtils {
    /**
     * Checks if a value of type T is null or undefined.
     * If it is, return true.
     * If it is not, return false.
     *
     * @param {T|null|undefined} obj Value to check.
     * @returns {boolean} True if the provided object is null or undefined. Otherwise, false.
     */
    static isNull<T>(obj: T): boolean;
    /**
     * Removes spaces from a string.
     *
     * @param {string} str String to remove spaces from.
     * @returns {string} String without spaces.
     */
    static removeSpaces(str: string): string;
    /**
     * Checks if a string is empty.
     *
     * @param {string} str String to check.
     * @returns {string} True if given string is empty. False otherwise.
     */
    static isEmpty(str: string): boolean;
    /**
     * Returns the amount of properties a given object has.
     *
     * @param {object} obj Object to check.
     * @returns {number} Number of properties on given object.
     */
    static getObjectPropsLength(obj: object): number;
}
