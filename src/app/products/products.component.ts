import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Products } from '../interfaces/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() receivedData?: Data = {};
  products: Array<Products> = [
    {
      name: 'Computer',
      price: 800
    },
    {
      name: 'Teclado',
      price: 50
    },
    {
      name: 'Mouse',
      price: 30
    },{
      name: 'Router',
      price: 150
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
