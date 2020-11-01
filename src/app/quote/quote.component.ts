import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // updating output binding property
  quotes:Quote[] = [
    new Quote(1, 'The purpose of our lives is to be happy' , '~Dalai Lama',new Date(2020,3,14)),
   new Quote(2,'Get busy living or get busy dying' , '~Stephen King',new Date(2020,8,14)),
   new Quote(3,'You only live once, but if you do it right, once is enough' , '~Mae west',new Date(2020,6,14)),
   new Quote(4,'Money and success don’t change people; they merely amplify what is already there' , '~Will Smith',new Date(2020,1,14)),
   new Quote(5,'If you want to live a happy life, tie it to a quote, not to people or things' , '~Albert Einstein',new Date(2020,9,14)),
    
  ];
  // adding a new quote
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
   // click event binding
  showDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    
  }

   // make the event active
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  

  constructor() { }

  ngOnInit() {
  }

}
