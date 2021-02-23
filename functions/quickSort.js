const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    
    let value = arr[start];
    let swapCount = start;

    for (let i = start + 1; i <= end; i++){
        if (value > arr[i]) {
            swapCount += 1;
            swap(arr, swapCount, i);
        }
    }

    swap(arr, start, swapCount);
    return swapCount;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIndex - 1)  
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

module.exports = quickSort