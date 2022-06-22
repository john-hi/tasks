export function cube(n: number): number {
  if (n === 0) {
    return 0;
  }
  let sum = 0;
  const k: number = startIndex(n) * 2 + 1;
  for (let odd = k, i = 1; i <= n; odd = odd + 2, i = i + 1) {
    sum = sum + odd;
  }
  return sum;
}

function startIndex(n: number): number {
  let sumIndex = 0;
  for (let i = 1; i <= n - 1; i = i + 1) {
    sumIndex = sumIndex + i;
  }
  return sumIndex;
}
