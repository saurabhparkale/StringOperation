import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  firstString: string = '';
  secondString: string = '';
  upperCaseString : string = '';
  lowerCaseString: string = '';
  lengthString: string = '';
  sliceString : string = '';
  sentenceString: string = '';
  reverseString: string = '';
  capitalizeString: string = '';
  stringArrayInput: string = '';
  fruitInput: string = '';
  quotedStringInput: string = '';
  secondLongestInput: string = '';
  trimString: string = '';
  arrayMatchInput: string = '';

  getLongestWord(sentence: string): string {
  if (!sentence) return '';
  return sentence
    .split(' ')
    .reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

  capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

getStringArray(input: string): string[] {
  if (!input) return [];
  return input.split(',').map(item => item.trim());
}

fruits: string[] = ['Banana', 'Apple', 'Mango'];

  addFruit(newFruit: string) {
    this.fruits.push(newFruit);
  }

  removeFruit(fruitToRemove: string) {
    this.fruits = this.fruits.filter(f => f !== fruitToRemove);
  }

  updateFruit(index: number, newValue: string) {
    this.fruits[index] = newValue;
  }

  input = "apple,banana,mango";
  quotedArray: string[] = [];

  ngOnInit() {
    this.quotedArray = this.input.split(',').map(f => `"${f}"`);

    this.groupedFruits = this.groupByFirstLetter(this.fruits);
  }


  addQuotedString(value: string) {
    if (value && !this.quotedArray.includes(value)) {
      this.quotedArray.push(value);
    }
  }

  getSecondLongestWord(sentence: string): string {
  if (!sentence) return '';
  const words = sentence.split(/\s+/).filter(Boolean);
  const uniqueWords = Array.from(new Set(words));
  uniqueWords.sort((a, b) => b.length - a.length);
  return uniqueWords[1] || '';
}


  arrayMatch(value: string): string {
    if (!value) return '';
    const trimmed = value.trim();
    return this.fruits.includes(trimmed) ? '\'${trimmed}\' Match found' : 'No match';
  }

  groupedFruits: { [key: string]: string[] } = {};

  groupByFirstLetter(array: string[]): { [key: string]: string[] } {
  return array.reduce((acc, fruit) => {
    const firstLetter = fruit[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(fruit);
    return acc;
  }, {} as { [key: string]: string[] });
}
}
