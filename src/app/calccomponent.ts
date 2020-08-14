import {Component} from '@angular/core';

@Component({
  selector: 'app-calc-component',
  templateUrl: './calccomponent.html'
})
export class CalcComponent {
  
  
  lastFigure:number;
  currentFigure:number;
  result:number;
  action:string;
  
  constructor(){
    this.lastFigure=0; 
    this.currentFigure=0;
    
  }

  numberclicked(event): void {
  debugger;
    if(this.lastFigure==0)
      this.lastFigure=event.target.value;
    else
    {
      this.currentFigure=event.target.value;
      if(this.action=='add')
        this.add()
    }      
  }

  actionClicked(event): void{
    this.action=event.target.value;
  }

  add(): void{
      this.result+=this.lastFigure+this.currentFigure;
      this.lastFigure=this.result;
  }

  
}
