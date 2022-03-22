import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/products.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input('product') product: ProductModel = {} as ProductModel;

  constructor() { }

  ngOnInit(): void {
  }

}
