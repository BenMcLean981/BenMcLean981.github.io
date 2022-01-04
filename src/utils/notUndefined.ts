export function notUndefined<T>(t: T | undefined): t is T {
  return t !== undefined;
}
