/**
 * Purpose of this funciton is just to semantically
 * declare what I'm doing with classes.join
 * @param classes List of css classes to merge.
 *
 * @returns css class array seperated by space
 */

export function mergeClasses(...classes: Array<string>): string {
  return classes.join(" ");
}
