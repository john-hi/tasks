import { factorial } from "./task-1";


export function a(n: number, k: number): number {
    return factorial(n) / factorial(n - k);
}

export function c(n: number, k: number): number {
    return factorial(k) / (factorial(k) * factorial(n - k));
}