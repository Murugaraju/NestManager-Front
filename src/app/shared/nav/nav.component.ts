import { Component, OnInit, Input, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()togglerSide:any;
   
  // @Output()
  // togglerSide:any;
  constructor() { 
    // console.log('priting the togglerSide',this.togglerSide)
  }

  ngOnInit() {
    console.log('priting the togglerSide',this.togglerSide,typeof this.togglerSide)
    
  }
  toggle(){
    this.togglerSide.toggle()
    console.log("I am working ")
  }
}
