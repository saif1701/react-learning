const counter = () => {
  let count = 0;
  const inner = () => {
    return (count += 1);
  };
  return inner;
};

const output = counter();

console.log(output());

/// Flatten array

const nested = [1, [2, [3, [4, [5]]]]];

const flatten = (nested) => {
  let result = [];
  for (let nest of nested) {
    if (Array.isArray(nest)) {
      result.push(...flatten(nest));
    } else {
      result.push(nest);
    }
  }
  return result;
};

const flattenToDepth = (nested, depth) => {
  let result = [];
  for (let nest of nested) {
    if (Array.isArray(nest) && depth > 0) {
      //   result.push(...flatten(nest));
      result.push(...flattenToDepth(nest, depth - 1));
    } else {
      result.push(nest);
    }
  }
  //   for (let i = 0; i < nest.length; i++) {
  //     if (Array.isArray(nest[i]) && depth > 0) {
  //       result.push(...flattenToDepth(nest[i], depth - 1));
  //     } else {
  //       result.push(nest[i]);
  //     }
  //   }
  return result;
};

console.log(flattenToDepth(nested));

// Flatten one level (the default).
nested.flat(); // [1, 2, [3, [4, [5]]]]

// Flatten a specific number of levels.
nested.flat(2); // [1, 2, 3, [4, [5]]]

// Flatten all levels by passing Infinity.
nested.flat(Infinity); // [1, 2, 3, 4, 5]

// debounce

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const search = (value) => {
  console.log(value);
};

const debounceSearch = debounce(search, 1000);

debounceSearch("R");
debounceSearch("Re");
debounceSearch("Rea");
debounceSearch("React");

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const nums = [1, 2, 3, 4, 5];

const even = nums.myFilter((num) => num % 2 === 0);

console.log(even);

// const fnLength = (fn) => {
//   return fn.length;
// };

// console.log(fnLength());

function objKey(nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[i] = nums[i];
  }
  return obj;
}

console.log(objKey(nums));

//Implement countBy(array, iteratee) so it creates an object whose keys are the results of calling iteratee on each element of array. The value of each key is the number of elements that produced that result. Do not modify the original array

const countBy = (arr, iterate) => {
  let result = {};
  for (let item of arr) {
    const key = iterate(item);
    if (result[key]) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  }
  return result;
};

const groupBy = (arr, key) => {
  let result = {};
  for (let item of arr) {
    const value = item[key];
    if (value === "HR") {
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push(item);
    }
  }
  return result;
};

const words = ["one", "two", "three", "four"];

console.log(countBy([], (o) => o));

const employees = [
  { id: 1, name: "John", department: "IT" },
  { id: 2, name: "Alice", department: "HR" },
  { id: 3, name: "Bob", department: "IT" },
  { id: 4, name: "Emma", department: "Finance" },
  { id: 5, name: "David", department: "HR" },
];
console.log(groupBy(employees, "department"));

const singleNumber = function (nums) {
  let result = {};
  for (let num of nums) {
    result[num] = (result[num] || 0) + 1;
  }
  for (const key in result) {
    if (result[key] === 1) {
      return Number(key);
    }
  }
};

console.log(singleNumber([2, 2, 1]));

var missingNumber = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;
  for (let num of nums) {
    if (num === 1) {
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 0;
    }
  }
  return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return arr;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var removeElement = function (nums, val) {
  const j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[i] == nums[i];
    }
  }
};

console.log(removeElement([1, 2, 2, 3], 3));

var moveZeroes = function (nums) {
  if (nums.length === 0) return false;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));

var findWordsContaining = function (words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
};

console.log(findWordsContaining(["leet", "cod"], "e"));

const threeSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const seen = new Set();

    for (let j = i + 1; j < nums.length; j++) {
      const diff = target - nums[i] - nums[j];

      if (seen.has(diff)) {
        return [nums[i], diff, nums[j]];
      }

      seen.add(nums[j]);
    }
  }

  return [];
};

console.log(threeSum([2, 5, 7, 11, 15], 24));

const debounce1 = (fn, delay) => {
  // your code
  let timer = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const search1 = debounce1((value) => {
  console.log(value);
}, 1000);

search("r");
search("re");
search("rea");
search("react");

let arr = [1, 2, 3, 4, 5];
let result = {};
arr.forEach((arr, index) => {
  result[index] = arr;
});
let obj = { ...arr };

console.log(result);
let username = ""; // Empty string (falsy)

if (username) {
  console.log(`Welcome back, ${username}!`);
} else {
  console.log("Please log in."); // This block will execute
}
