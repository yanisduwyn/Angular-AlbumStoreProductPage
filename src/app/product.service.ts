import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { Album } from './album';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map((response) => <Album>response.json());
  }

  private _productUrl:string ="../assets/products.json";

  getProducts():Observable<Product[]>{
    return this._http.get(this._productUrl)
      .map((response) => <Product[]>response.json());
  };
}