import { IMetadata } from './Interfaces';
/**
 * Collection of utilities that help with interacting with URLs.
 */
export declare class URLUtils {
    /**
     * Parse a URL and returns all of the parameters in it.
     */
    static getUrlVars(url: string): Array<IMetadata<string>>;
}
