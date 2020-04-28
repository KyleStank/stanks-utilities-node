import fs from 'fs';

/**
 * Collection of utilities that are commonly used.
 */
class CommonUtils {
    /**
     * Checks if a value of type T is null or undefined.
     * If it is, return true.
     * If it is not, return false.
     *
     * @param {T|null|undefined} obj Value to check.
     * @returns {boolean} True if the provided object is null or undefined. Otherwise, false.
     */
    static isNull(obj) {
        return obj === null || obj === undefined;
    }
    /**
     * Removes spaces from a string.
     *
     * @param {string} str String to remove spaces from.
     * @returns {string} String without spaces.
     */
    static removeSpaces(str) {
        return !CommonUtils.isNull(str) ? str.replace(/\s/g, '') : '';
    }
    /**
     * Checks if a string is empty.
     *
     * @param {string} str String to check.
     * @returns {string} True if given string is empty. False otherwise.
     */
    static isEmpty(str) {
        return !CommonUtils.isNull(str) ? CommonUtils.removeSpaces(str).length <= 0 : false;
    }
    /**
     * Returns the amount of properties a given object has.
     *
     * @param {object} obj Object to check.
     * @returns {number} Number of properties on given object.
     */
    static getObjectPropsLength(obj) {
        return !CommonUtils.isNull(obj) ? Object.keys(obj).length : 0;
    }
}

/**
 * Collection of utilities that help with reading and writing from and/or to the disk.
 */
class IOUtils {
    /**
     * Checks if a given path exists on the file system.
     *
     * @param {string} path Path to check.
     * @returns {boolean} True if given path exists. False otherwise.
     */
    static exists(path) {
        return !CommonUtils.isNull(path) ? fs.existsSync(path) : false;
    }
    /**
     * Reads a file and returns the contents.
     *
     * @param {string} file Path to file.
     * @returns {string} Contents of file.
     */
    static readFile(file) {
        return !CommonUtils.isNull(file) ? fs.readFileSync(file, 'utf8') : '';
    }
    /**
     * Writes an object in JSON form to a file.
     *
     * @param {string} file Path to file.
     * @param {object} data JSON object to write.
     * @returns {boolean} True if file was successfully written to. Otherwise, false.
     */
    static writeJSONFile(file, data) {
        // If data is null, return false.
        if (CommonUtils.isNull(file) || CommonUtils.isNull(data)) {
            return false;
        }
        // Convert the object to a JSON string and write the result.
        fs.writeFileSync(file, JSON.stringify(data));
        return true;
    }
}

/**
 * Collection of utilities that help with interacting with URLs.
 */
class URLUtils {
    /**
     * Parse a URL and returns all of the parameters in it.
     */
    static getUrlVars(url) {
        if (CommonUtils.isNull(url)) {
            return [];
        }
        const urlVars = [];
        // Find every URL parameter with REGEX.
        url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (currentItem, key, value) => {
            let urlParam;
            // Decode the URI value, remove all special characters, ensure that there is only a maximum of one space between words, and make sure that there are no spaces before or after the string.
            try {
                // Get URL parameter.
                urlParam = decodeURIComponent(value).replace(/[^\w\s]/gi, ' ').replace(/\s\s+/g, ' ').trim();
            }
            catch (e) {
                // Get URL parameter.
                urlParam = value.replace(/[^\w\s]/gi, ' ').replace(/\s\s+/g, ' ').trim();
            }
            // Push URL parameter to list.
            urlVars.push({
                key: key,
                value: urlParam
            });
            return currentItem;
        });
        return urlVars;
    }
}

export { CommonUtils, IOUtils, URLUtils };
//# sourceMappingURL=index.es.js.map
