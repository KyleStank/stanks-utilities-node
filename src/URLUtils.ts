import { CommonUtils } from './CommonUtils';
import { IMetadata } from './Interfaces';

/**
 * Collection of utilities that help with interacting with URLs.
 */
export class URLUtils {
  /**
   * Parse a URL and returns all of the parameters in it.
   */
  static getUrlVars(url: string): Array<IMetadata<string>> {
    if (CommonUtils.isNull(url)) {
      return [] as Array<IMetadata<string>>;
    }

    const urlVars: Array<IMetadata<string>> = [] as Array<IMetadata<string>>;

    // Find every URL parameter with REGEX.
    url.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      (currentItem: string, key: string, value: string): string => {
        let urlParam: string;

        // Decode the URI value, remove all special characters, ensure that there is only a maximum of one space between words, and make sure that there are no spaces before or after the string.
        try {
          // Get URL parameter.
          urlParam = decodeURIComponent(value).replace(/[^\w\s]/gi, ' ').replace(/\s\s+/g, ' ').trim();
        } catch (e) {
          // Get URL parameter.
          urlParam = value.replace(/[^\w\s]/gi, ' ').replace(/\s\s+/g, ' ').trim();
        }

        // Push URL parameter to list.
        urlVars.push({
          key:   key,
          value: urlParam
        });

        return currentItem;
      }
    );

    return urlVars;
  }
}
