declare module 'lodash' {
  const lodash: {
    partition<T>(array: T[], predicate: (value: T) => boolean): [T[], T[]];
    filter<T>(array: T[], predicate: (value: T) => boolean): T[];
    map<T, U>(array: T[], iteratee: (value: T) => U): U[];
    compose<T>(...functions: Array<(arg: T) => T>): (arg: T) => T;
  };

  export = lodash;
}
