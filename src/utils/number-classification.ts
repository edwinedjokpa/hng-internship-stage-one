// Check if a number is prime
export const isPrime = (number: number): boolean => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

// Check if a number is perfect
export const isPerfect = (number: number): boolean => {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) sum += i;
  }
  return sum === number;
};

// Check if a number is an Armstrong number
export const isArmstrong = (number: number): boolean => {
  const digits = number.toString().split('');
  const numDigits = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), numDigits),
    0,
  );
  return sum === number;
};

// Get the sum of the digits
export const getDigitSum = (number: number): number => {
  return Math.abs(number)
    .toString()
    .split('')
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
};
