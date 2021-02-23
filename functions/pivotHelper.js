const swap = (arr, index1, index2) => {
    const tmp = arr[index2];
    arr[index2] = arr[index1];
    return arr[index1] = tmp;
}

const pivotHelper = (arr) => {
    let pivotIndex = 0;
    let swapCount = 0;
    let value = arr[pivotIndex];

    for (let i = 1; i <= arr.length; i++){
        if (value > arr[i]) {
            swapCount += 1;
            swap(arr, pivotIndex + swapCount, i);
        }
    }

    swap(arr, 0, pivotIndex + swapCount);
    return pivotIndex + swapCount;
}

module.exports = pivotHelper