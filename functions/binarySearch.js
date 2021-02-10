function binarySearch(arr, expected) {
    let bottom = 0;
    let top = arr.length - 1;

    while (true) {
        let middle = Math.floor(bottom + (top - bottom) / 2);
        let value = arr[middle]

        // If value is found
        if (value === expected) {
            return middle;
        }
        // If value is not found and no remaining options
        if (top === bottom) {
            break;
        }

        // If value > expected set top to middle - 1
        if (value > expected) {
            top = middle - 1;
        }
        
        // If value < expected set bottom to middle + 1
        if (value < expected) {
            bottom = middle + 1;
        }
    }
    return null;
}

module.exports = binarySearch;