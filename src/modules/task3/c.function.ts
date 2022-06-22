import { factorial } from '../task1/factorial.function';

export function c(n: number, k: number): number {
  return factorial(n) / (factorial(k) * factorial(n - k));
}
