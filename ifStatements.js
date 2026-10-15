function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
    return "No, that was false";
}

console.log(ourTrueOrFalse(true)); // Output: Yes, it's true
console.log(ourTrueOrFalse(false)); // Output: No, it's false
console.log(trueOrFalse(true)); // Output: Yes, that was true
console.log(trueOrFalse(false)); // Output: No, that was false