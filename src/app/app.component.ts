import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Title';
  number1=0;
  number2=0;
  sum=0;
  Add= () =>{
    this.sum=this.number1+this.number2;
  }
  listOfName = ["AYS","ADY","KRM","NDN"]
  listOfNumbers = [12,21,34,65,13,1]
  count=0;
  increment= () =>{
    this.count++;
  }
  decrement= () =>{
    this.count--;
  }
}
