import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, 'The purpose of our lives is to be happy' , '~Dalai Lama',new Date(2020,3,14)),
    new Quote(2,'Get busy living or get busy dying' , '~Stephen King',new Date(2020,8,14)),
    new Quote(3,'You only live once, but if you do it right, once is enough' , '~Mae west',new Date(2020,6,14)),
    new Quote(4,'Money and success don’t change people; they merely amplify what is already there' , '~Will Smith',new Date(2020,1,14)),
    new Quote(5,'If you want to live a happy life, tie it to a goal, not to people or things' , '~Albert Einstein',new Date(2020,9,14)),
     
  ];
}
