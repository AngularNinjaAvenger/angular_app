import { Component, OnInit } from '@angular/core';
import { RecieptItemComponent } from '../reciept-item/reciept-item.component'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  node = new RecieptItemComponent()

  constructor() { 
  }

  ngOnInit() {
  }
  coc(){
    console.log("whatpopaing")
    this.node.po(" bishop eguabor") 
  }
}
