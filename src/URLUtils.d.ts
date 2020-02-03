declare module 'stanks-utilities-node' {
  /**
   * Collection of utilities that help with interacting with URLs.
   */
  export class URLUtils {
    /**
     * Parse a URL and returns all of the parameters in it.
     */
    static getUrlVars(url: string): Array<IMetadata<string>>;
  }
}
