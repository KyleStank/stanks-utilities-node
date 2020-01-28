/**
 * Collection of utilities that help with interacting with URLs.
 */
export class URLUtils {
  /**
   * Parse a URL and returns all of the parameters in it.
   */
  static getUrlVars(url: string): object {
    // Create an empty array to store all of the parameters.
    const vars = {};
      
    // Find every URL parameter with REGEX.
    // TODO: Remove "?" and "&" from the results below.
    const rawVars = url.match(/[?&]+([^=&]+)=([^&]*)/gi);
    console.log(rawVars);

    return vars;
  }
}
