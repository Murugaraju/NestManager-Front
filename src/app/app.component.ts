import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title=[];
 
  constructor(){
    for(let i=0;i<99;i++){
      console.log(i);
      this.title.push(i);
    }
  console.log('asfdas',this.title)
  };
  
}