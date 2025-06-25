import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
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

  getLongestWord(sentence: string): string {
  if (!sentence) return '';
  return sentence
    .split(' ')
    .reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
}
