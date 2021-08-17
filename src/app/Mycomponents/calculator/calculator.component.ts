import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1!: number;
  num2!: number;
  result!: number;

  add(){    
    this.result=this.num1 + this.num2;
    //console.warn(this.result);
  }
  sub(){
    this.result=this.num1-this.num2;
    
  }
  multiply(){
    this.result=this.num1*this.num2;
    
  }
  divide(){
    this.result=this.num1/this.num2;
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
