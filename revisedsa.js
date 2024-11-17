function median(a, b) {
  let n1 = a.length,
    n2 = b.length;
  let n = n1 + n2;
  let index2 = n / 2;
  let index1 = index2 - 1;
  let index1ele = -1;
  let index2ele = -1;
  let i = 0,
    j = 0;
  let count = 0;
  while (i < n1 && j < n2) {
    if (a[i] < b[j]) {
      if (count === index1) {
        index1ele = a[i];
      }
      if (count === index2) {
        index2ele = a[i];
      }
      count++;
      i++;
    } else {
      if (count === index1) {
        index1ele = b[j];
      }
      if (count === index2) {
        index2ele = b[j];
      }
      count++;
      j++;
    }
  }

  while (i < n1) {
    if (count === index1) {
      index1ele = a[i];
    }
    if (count === index2) {
      index2ele = a[i];
    }
    i++;
    count++;
  }
  while (j < n2) {
    if (count === index1) {
      index1ele = b[j];
    }
    if (count === index2) {
      index2ele = b[j];
    }
    count++;
    j++;
  }
  if (n % 2 === 1) {
    return index2ele;
}

return (index1ele + index2ele) / 2.0;
}

let a = [1, 4, 7, 10, 12];
let b = [2, 3, 6, 15];
console.log("The median of two sorted arrays is " + median(a, b).toFixed(1));
