export class Sorting {

  constructor() { }

  sortArray(array, sortBy) {
    const sorted = array.sort((n1, n2) => {
      if (n1.sortBy < n2.sortBy) {
        return 1;
      } else if (n1.sortBy > n2.sortBy) {
        return -1;
      }
      return 0;
    });
    return sorted;
  }

}
