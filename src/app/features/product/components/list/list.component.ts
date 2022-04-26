import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ToasterService } from 'src/app/shared/service/toastr.service';
import { ProductModel } from '../../models/products.model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productsList: ProductModel[] = [];
  list: ProductModel[] = [];
  grid: boolean = true;

  options: string[] = ['Low-High', 'High-Low', '1000-10000', '10000-20000', '10000-50000', '10000-100000']

  constructor(
    private _productsService: ProductsService,
    private _toasterService: ToasterService
  ) { }

  /**
   * Function used to fetch the products
   */
  ngOnInit(): void {
    this._productsService.getProducts().subscribe(response => {
      if(response.length > 0) {
        this.productsList = response;
        this.list = this.productsList;
      }
    }, (error: string) => {
      this._toasterService.showError(error);
    });
  }

/**
 * Filtering the products based on selection change
 * @param optionSelected : Option that has been selected for filtering
 */
  onSelection(optionSelected: MatSelectChange): void {
    this.productsList = this.list;
    switch(true) {
      case optionSelected.value === 'Low-High': {
        this.productsList = this.productsList.sort((a,b) =>  (a.price > b.price ? 1 : -1));
        break;
      }
      case optionSelected.value === 'High-Low': {
        this.productsList = this.productsList.sort((a,b) =>  (a.price > b.price ? -1 : 1));
        break;
      }
      case (optionSelected.value !== 'Low-High' || optionSelected.value !== 'High-Low'): {
        let initialValue = optionSelected.value.split("-");
        this.productsList = this.productsList.filter(product => 
          Number(product.price) >= Number(initialValue[0]) && Number(product.price) <= Number(initialValue[1])
          );
        break;
      }
    }
  }

}
