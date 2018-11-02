import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = 'https://angular-movies-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiURL + 'products').pipe(
      tap((products: Product[]) => this.log('Get all Products')),
      catchError(this.handleError<Product[]>('get'))
    );
  }

  getAllCategories() {
    return this.http.get<Product[]>(this.apiURL + 'categories').pipe(
      tap((products: Product[]) => this.log('Get all Categories')),
      catchError(this.handleError<Product[]>('get'))
    );
  }

  /** Gets products by id**/
  getById(id: String): Observable<Product> {
    return this.http.get<Product>(this.apiURL + 'products/' + id, httpOptions).pipe(
      tap((product: Product) => this.log(`Get movie in as w/ title=${product.name}`)),
      catchError(this.handleError<Product>('get'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message in the console */
  private log(message: string) {
    console.log(`UserService: ${message}`);
  }
}
