import fs from 'fs';

import { CommonUtils } from './CommonUtils';

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
  static exists(path: string): boolean {
    return !CommonUtils.isNull(path) ? fs.existsSync(path) : false;
  }

  /**
   * Reads a file and returns the contents.
   * 
   * @param {string} file Path to file.
   * @returns {string} Contents of file.
   */
  static readFile(file: string): string {
    return !CommonUtils.isNull(file) ? fs.readFileSync(file, 'utf8') : '';
  }

  /**
   * Writes an object in JSON form to a file.
   * 
   * @param {string} file Path to file.
   * @param {object} data JSON object to write.
   * @returns {boolean} True if file was successfully written to. Otherwise, false.
   */
  static writeJSONFile(file: string, data: object|null|undefined): boolean {
    // If data is null, return false.
    if (CommonUtils.isNull(file) || CommonUtils.isNull(data)) {
      return false;
    }

    // Convert the object to a JSON string and write the result.
    fs.writeFileSync(file, JSON.stringify(data));

    return true;
  }
}
