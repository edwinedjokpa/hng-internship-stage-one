import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  getDigitSum,
  isArmstrong,
  isPerfect,
  isPrime,
} from './utils/number-classification';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // Fetch fun fact from the Numbers API
  async getFunFact(number: number): Promise<string> {
    const { data } = await axios.get(`http://numbersapi.com/${number}/math`);
    return data;
  }

  // Classify the number into its properties
  async classifyNumber(number: number) {
    const isPrimeResult = isPrime(number);
    const isPerfectResult = isPerfect(number);
    const isArmstrongResult = isArmstrong(number);
    const digitSum = getDigitSum(number);
    const properties = [];

    if (isArmstrongResult) properties.push('armstrong');
    if (number % 2 === 0) properties.push('even');
    else properties.push('odd');

    const funFact = await this.getFunFact(number);

    return {
      number,
      is_prime: isPrimeResult,
      is_perfect: isPerfectResult,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    };
  }
}
