 export function findOutlier(integers: number[]): number {
  let binary = integers.map((int, i) => int % 2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 0) count++;
  }
  if (count > 1) {
    return integers[binary.indexOf(1)];
  } else {
    return integers[binary.indexOf(0)];
  }
 }