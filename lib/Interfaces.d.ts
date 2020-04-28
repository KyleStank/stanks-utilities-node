/**
 * Small interface for defining miscellaneous metadata with a value of type T.
 */
export interface IMetadata<T> {
    key: string;
    value: T;
}
