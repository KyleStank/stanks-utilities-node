declare module 'stanks-utilities-node' {
  /**
   * Collection of utilities that are commonly used.
   */
  export class CommonUtils {
    /**
     * Checks if a value of type T is null or undefined.
     * If it is, return true.
     * If it is not, return false.
     * 
     * @param {T|null|undefined} obj Value to check.
     * @returns {boolean} True if the provided object is null or undefined. Otherwise, false.
     */
    static isNull<T>(obj: T|null|undefined): boolean;

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

  /**
   * Collection of utilities that help with reading and writing from and/or to the disk.
   */
  export class IOUtils {
    /**
     * Checks if a given path exists on the file system.
     * 
     * @param {string} path Path to check.
     * @returns {boolean} True if given path exists. False otherwise.
     */
    static exists(path: string): boolean;

    /**
     * Reads a file and returns the contents.
     * 
     * @param {string} file Path to file.
     * @returns {string} Contents of file.
     */
    static readFile(file: string): string;

    /**
     * Writes an object in JSON form to a file.
     * 
     * @param {string} file Path to file.
     * @param {object} data JSON object to write.
     * @returns {boolean} True if file was successfully written to. Otherwise, false.
     */
    static writeJSONFile(file: string, data: object|null|undefined): boolean;
  }

  /**
   * Collection of utilities that help with interacting with URLs.
   */
  export class URLUtils {
    /**
     * Parse a URL and returns all of the parameters in it.
     */
    static getUrlVars(url: string): object;
  }
}
