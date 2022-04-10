import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote (1, 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.', 'Martin Luther King', 'Dennis Njeru', new Date(2020, 4, 20)),
    new Quote (2, 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Albert Einstein', 'Eric Nzioka', new Date(2020, 7, 25)),
    new Quote (3, 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You are on your own. And you know what you know. And YOU are the one who will decide where to go.', 'Dr. Seuss', 'Ian Nzioka', new Date(2021, 2, 10)),
    new Quote (4, 'There is no greater agony than bearing an untold story inside you.', 'Maya Angelou', 'Ann Boohle', new Date(2021, 4, 21)),
    new Quote (5, 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.', 'Helen Keller', 'Vivian Saumu', new Date(2021, 6, 31)),
  ];

  displayDetails(index:any){
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
      let toDelete = confirm(`Are you sure you want to delete a quote by ${this.quotes[index].author}?`)

      if(toDelete){
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
