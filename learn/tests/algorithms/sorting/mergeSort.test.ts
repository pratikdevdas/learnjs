// mergeSort.test.ts
import { mergeSort } from '../../../algorithms/sorting/mergeSort';
import { describe, expect, it } from 'vitest';

describe('mergeSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const input = [5, 3, 8, 6, 2, 7, 1, 4];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(mergeSort(input)).toEqual(expected);
    });

    it('should handle an empty array', () => {
        const input: number[] = [];
        const expected: number[] = [];
        expect(mergeSort(input)).toEqual(expected);
    });

    it('should handle an array with one element', () => {
        const input = [42];
        const expected = [42];
        expect(mergeSort(input)).toEqual(expected);
    });

    it('should handle an array with duplicate elements', () => {
        const input = [4, 2, 7, 3, 2, 7, 1, 4];
        const expected = [1, 2, 2, 3, 4, 4, 7, 7];
        expect(mergeSort(input)).toEqual(expected);
    });

    it('should handle an already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];
        expect(mergeSort(input)).toEqual(expected);
    });

    it('should handle a reverse sorted array', () => {
        const input = [5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5];
        expect(mergeSort(input)).toEqual(expected);
    });
});
