import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reciept-item',
  templateUrl: './reciept-item.component.html',
  styleUrls: ['./reciept-item.component.css']
})
export class RecieptItemComponent implements OnInit {
  ponpon = "what popaing"
  constructor() { }

  ngOnInit() {
  }
  po(txt="emmanuel"){
    console.log("method called",this.ponpon,txt)
    this.ponpon = txt
    console.log("method called",this.ponpon,txt)
  
  }

}
