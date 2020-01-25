export default class ObjectUtils {
  static isNull(obj: object|null|undefined): boolean {
    return obj === null || obj === undefined;
  }
}
