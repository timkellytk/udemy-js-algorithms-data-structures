function swap(arr, index1, index2) {
    const tmp = arr[index2];
    arr[index2] = arr[index1]
    arr[index1] = tmp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = (i + 1); j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
}

module.exports = selectionSort;