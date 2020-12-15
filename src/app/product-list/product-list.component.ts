import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  products: Product[];

  constructor(private _productservice:ProductService) { }

  ngOnInit() {
    this._productservice.getProducts()
      .subscribe(response=> this.products = response);

  }

}
