// Implement bubble sort on array

function bubbleSort (array, ascending) {
  // Boolean ascending
  // array assumptions:
  // - numeric or easily coerced
  // - at least two elements

  let  swapOccurred = true;  // initial value to allow loop entry

  let top = array.length; // top of unsorted region of array
  let iter = 0; // iteration count
  while (swapOccurred) {
    console.log(`Iteration ${++iter} starting, ${array}`);
    swapOccurred = false; // init value for loop
    for (let i = 1; i < top; i++) {
      if (array[i-1] > array[i]) {
        let temp = array[i-1];
        array[i-1] = array[i];
        array[i] = temp;
        swapOccurred = true;
      } // if
    } // for
    top--; // one more element in sorted region per iteration
  } // outer while
  return array;
}

console.log(bubbleSort([20, 2, 4, 6, 8, 10, -6]));
