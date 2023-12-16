import { readData } from '../../shared.ts';
import chalk from 'chalk';

const validNumStrings = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);

  const firstDigitRegex = new RegExp(`(\\d|${Object.keys(validNumStrings).join('|')}).*`);
  const lastDigitRegex = new RegExp(`.*(\\d|${Object.keys(validNumStrings).join('|')})`);
  const numbers = data.map((x) => {
    const firstDigitMatch = x.match(firstDigitRegex);
    const lastDigitMatch = x.match(lastDigitRegex);
    const firstDigit = validNumStrings[firstDigitMatch[1]] ? validNumStrings[firstDigitMatch[1]]: firstDigitMatch[1];
    const secondDigit = validNumStrings[lastDigitMatch[1]] ? validNumStrings[lastDigitMatch[1]]: lastDigitMatch[1];
    const result = firstDigit + secondDigit;
    return result
  });
  const sum = numbers.reduce((acc, x) => acc + parseInt(x), 0);
  return sum;
}

const answer = await day1b('puzzles/day-1/day-1-b.data.txt');
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
