function swap(arr, index1, index2) {
    const tmp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = tmp
}

function bubbleSort(arr) {
    let swapped = true;

    while (swapped) {
        swapped = false;
        arr.forEach((item, index) => {
            const left = item;
            const right = arr[index + 1];

            if (left > right) {
                swap(arr, index, index + 1);
                swapped = true;
            }
        });
    }
    return arr;
}

module.exports = bubbleSort;