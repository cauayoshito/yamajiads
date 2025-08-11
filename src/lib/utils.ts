/**
 * A simple class name merging utility. Takes any number of arguments
 * consisting of strings, arrays or objects and joins truthy values into
 * a single string. Useful when conditionally concatenating Tailwind
 * classes.
 */
export function cn(...inputs: any[]): string {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === 'string') return [input];
      if (Array.isArray(input)) return input;
      if (typeof input === 'object') {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}