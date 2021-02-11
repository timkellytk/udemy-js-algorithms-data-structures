/* Original solution - splices rather than shuffles values */

/* function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        // Loop until index = 0
        for (let j = i - 1; j >= 0; j--) {
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
} */

/* Refactored solution after reviewing answer */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        // Loop until index = 0
        for (var j = i - 1; j >= 0 && value < arr[j]; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = value;
    }
    return arr
}

/* function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
} */

module.exports = insertionSort;