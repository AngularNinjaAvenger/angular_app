import { Component, OnInit } from '@angular/core';

import { Recipe } from './reciepe.module'

@Component({
  selector: 'app-reciept-details',
  templateUrl: './reciept-details.component.html',
  styleUrls: ['./reciept-details.component.css']
})
export class RecieptDetailsComponent implements OnInit {
  recipe =  []
  constructor() {
    new Recipe("A test recipe","Recipe Description","https://cdn.pixabay.com/photo/2019/08/23/16/00/landscape-4425963_960_720.jpg")
   }

  ngOnInit() {
  }

}
