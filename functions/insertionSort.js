function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Loop until index = 0
        for (let j = i - 1; j >= 0; j--) {
            let value = arr[i];
            let compare = arr[j];

            if (value >= compare) {
                // Remove item from unsorted array
                arr.splice(i, 1);
                // Insert item into sorted array
                arr.splice(j + 1, 0, value);
                break;
            }

            if (j <= 0) {
                // Remove item from unsorted array
                arr.splice(i, 1);
                // Insert item into start of sorted array
                arr.unshift(value);
                break;
            }
        }
    }
    return arr
}

module.exports = insertionSort;