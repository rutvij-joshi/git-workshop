function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Test cases
console.log(factorial(0));  
console.log(factorial(5));  
console.log(factorial(10)); 
console.log(factorial(20)); 
console.log(factorial(30)); 
console.log(factorial(40)); 
console.log(factorial(50)); 
console.log(factorial(60)); 
