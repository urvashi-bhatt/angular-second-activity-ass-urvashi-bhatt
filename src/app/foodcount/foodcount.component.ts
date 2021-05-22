import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodcount',
  templateUrl: './foodcount.component.html',
  styleUrls: ['./foodcount.component.css']
})
export class FoodcountComponent implements OnInit {

  constructor() { }
  public counter : number = 0;

    
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    this.counter -= 1;
  }

  
  ngOnInit(): void {
    
  }

}
