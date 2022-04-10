import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote (1, 'If you can not fly then run, if you can not run then walk, if you can not walk then crawl, but whatever you do you have to keep moving forward.', 'Martin Luther King', 'Joy Marocho', new Date(2019, 6, 27)),
    new Quote (2, 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', 'Albert Einstein', 'Astrid Keonna', new Date(2020, 12, 8)),
    new Quote (3, 'If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes.', 'Andrew Carnegie', 'Hope Nkatha', new Date(2021, 3, 16)),
    new Quote (4, 'Don not limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve', 'Mary Kay Ash', 'Gloria Kawira', new Date(2021, 6, 22)),
    new Quote (5, 'Fearlessness is like a muscle. I know from my own life that the more I exercise it the more natural it becomes to not let my fears run me.', 'Arianna Huffington', 'Don Caleb', new Date(2021, 1, 25)),
    new Quote (6, 'In the end, a vision without the ability to execute it is probably a hallucination', 'Steve Case', 'Yadah', new Date(2020, 2, 14)),
    new Quote (7, 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.', 'Steve Jobs', 'Sophy', new Date(2022, 1, 24)),
    new Quote (6, 'Chase the vision, not the money, the money will end up following you.', 'Tony Hsieh', 'Jojo', new Date(2018, 5, 2)),
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
