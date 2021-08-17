import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  title='Todo List';
  list: any[]=[];


  addtodo(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);
  }
  deletetodo(id:number){
    this.list=this.list.filter(item=>item.id!==id);

  }

  constructor() { }
  

  ngOnInit(): void {
  }

}
