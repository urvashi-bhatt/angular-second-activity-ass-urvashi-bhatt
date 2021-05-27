import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodcount',
  templateUrl: './foodcount.component.html',
  styleUrls: ['./foodcount.component.css']
})
export class FoodcountComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  countNumber = 0;
  
  resetBtn(){
    this.countNumber = 0;
  }
  
  increaseBtn(){
    this.countNumber = this.countNumber + 1;
  }

  decreaseBtn(){
    this.countNumber = this.countNumber -1;
    if(this.countNumber < 0){
      this.countNumber = 0;
    }
  }
}
