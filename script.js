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
    let order = getAscending();
    displayOutput(bubbleSort({array : numArr, ascending : order}), order);
  } else {
    console.log('Need more than one number to sort.');
  }
}

function getAscending() {
  // returns true unless descending radio button selected
  let val = !document.getElementById('sort_down').checked;
  return val;
}

function displayInput(arr) {
 let inputDiv = document.getElementById('input');
 inputDiv.textContent = `You entered ${arr.length} numbers:\n${arr}`;
}

function displayOutput(object) {
  let outputDiv = document.getElementById('output');
  outputDiv.textContent = `Your numbers sorted in
                        ${object.ascending ? 'ascending' : 'descending'} order:
                        ${object.sorted} by ${object.iterations} iteration${
                          object.iterations === 1 ? '' : 's'}.`;
}

// function bubbleSort (array, ascending) {
function bubbleSort (obj) {
  // obj.array - array of at least two integers
  // obj.ascending - boolean value
  // obj.iterations - (return value) number of iterations to sort
  // obj.sorted - array of sorted elements
  // array assumptions:

  let ascending = obj.ascending;
  let array = obj.array;

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
      }
    }
    top--; // one more element in sorted region per iteration
  }
  obj.sorted = array;
  obj.iterations = iter;
  return obj;
}

function swap(ar, ind) {
// swaps value at index with value at index-1
  let temp = ar[ind-1]
  ar[ind-1] = ar[ind];
  ar[ind] = temp;
}

//console.log(bubbleSort([20, 2, 4, 6, 8, 10, -6], false));
