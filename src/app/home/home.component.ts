import { Component, OnInit } from '@angular/core';
import { Auth, User } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Observable<User>;
  products: Array<Product>;
  categories: any;

  constructor(private store: Store<AppState>, private _productService: ProductService, private _router: Router) {
    this.user = store.select('user');
  }

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this._productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
        console.log(this.products);
      });
  }

  getAllCategories() {
    this._productService.getAllCategories()
      .subscribe(categories => {
        this.categories = categories;
        console.log(this.categories);
      });
  }

  onGoToMovie(id) {
    this._router.navigate(['movie', id]);
  }

  logout() {
  }

}
