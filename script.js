// Allow user to input space separated numbers and choose sort order.
// Perform bubble sort on array and output results.

function getStringValue () {
  parseStringToArray(document.getElementById('input_str').value);
}

function parseStringToArray (str) {
  arr = str.split(' ').map(function(x){return parseInt(x, 10)});
  numArr = arr.filter(num => !Number.isNaN(num));
  displayInput(numArr);
  if (numArr.length > 1) {
    console.log(bubbleSort(numArr, true));
  } else {
    console.log('Need more than one number to sort.');
  }
}

function displayInput(arr) {
  // let div=document.getElementById('input');
  // div.value = 'Hello World!';
 let inputDiv = document.getElementById('input');
 let whatUserEntered = document.createTextNode(`You entered ${arr.length} numbers:
                          ${arr}`);
 // add the text node to the newly created div
 inputDiv.appendChild(whatUserEntered);
 inputDiv.value = 'Hello World!';
}

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
      if (( ascending && array[i-1] > array[i] ) ||
        ( !ascending && array[i-1] < array[i] )) {
        swap(array, i);
        swapOccurred = true;
      } // if
    } // for
    top--; // one more element in sorted region per iteration
  } // outer while
  return array;
}

function swap(ar, ind) {
// swaps value at index with value at index-1
  let temp = ar[ind-1]
  ar[ind-1] = ar[ind];
  ar[ind] = temp;
}

console.log(bubbleSort([20, 2, 4, 6, 8, 10, -6], false));
