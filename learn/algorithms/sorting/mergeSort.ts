// mergeSort.ts

/**
 * Performs a merge sort on an array of numbers.
 * @param arr - The array of numbers to be sorted.
 * @returns A new sorted array.
 */
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr; // Base case: arrays with 0 or 1 element are already sorted
    }

    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

/**
 * Merges two sorted arrays into one sorted array.
 * @param left - The first sorted array.
 * @param right - The second sorted array.
 * @returns A merged sorted array.
 */
function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and build the sorted result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Append remaining elements from left or right
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Export the function for testing
export { mergeSort };
