import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote (1, 'Do you want to know who you are. Do not ask. Act. Action will delineate and define you.', 'Thomas Jefferson', 'Joy Marocho', new Date(2022, 5, 10)), 
    new Quote (2, 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Albert Einstein', 'Astrid Keonna', new Date(2022, 6, 27)),
    new Quote (3, 'Leave all the afternoon for exercise and recreation, which are as necessary as reading. I will rather say more necessary because health is worth more than learning.', 'Thomas Jefferson', 'Jade Varsquez', new Date(2020, 12, 08)),
    new Quote (4, 'f you can not fly then run, if you can not run then walk, if you can not walk then crawl, but whatever you do you have to keep moving forward.', 'Martin Luther King, Jr', 'Hope Nkatha', new Date(2021, 3, 16)),
    new Quote (5, 'Don not worry about people stealing your design work. Worry about the day they stop.', 'Jeffrey Zeldman', 'Gloria Kawira', new Date(2021, 6, 22)),
    new Quote (2, 'Chase the vision, not the money, the money will end up following you.', 'Tony Hsieh', 'Don Caleb', new Date(2019, 1, 25)),
  ];

  displayDetails(index: any){
    this.quotes[index].showAuthorAndSubmitter = !this.quotes[index].showAuthorAndSubmitter;
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateEntered = new Date(quote.dateEntered)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete:any, index:any){
    if(isComplete){
      let toDelete = confirm('Are you sure you want to delete a quote by ${this.quotes[index].author}?')
    
      if(toDelete){
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}

}
