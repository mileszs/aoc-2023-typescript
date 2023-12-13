import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1a(dataPath?: string) {
  const data = await readData(dataPath);

  const sum = data.map((x) => {
    const allDigits = x.match(/\d/g).join('');
    return allDigits[0] + allDigits.at(-1);
  }).reduce((acc, x) => acc + parseInt(x), 0);

  return sum;
}

const answer = await day1a('puzzles/day-1/day-1-a.data.txt');
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
