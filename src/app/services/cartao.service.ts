import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {
  private headers: HttpHeaders;
  private local = "http://localhost:8080/";
  private cartaoURL = 'cartao';
  private access_token: string = null;
  constructor(private http: HttpClient, private router: Router) { }

  getToken(){
    if (!localStorage.getItem("token")) {
      this.redirectLogin();
    }
    return this.access_token
      ? this.access_token
      : localStorage.getItem("token");
  }

  redirectLogin(){
    if(this.router.url == '/') return;
    window.location.href = 'localhost:4200'
  }

  postCartao(cartao){
    // this.headers = this.getHeaders();
    return this.post("cartao", cartao)
      .toPromise()
      .then(
        response => {
          console.log(response);
          // this.router.navigate(["home"]);
        },
        error => {
          console.log('error');
          console.log(error);
        }
      );
  }

  post = (URL: string, data: any): Observable<Object> => {
    return this.http.post(this.local + this.cartaoURL, data, { headers: this.getHeaders() });
  };

  getHeaders() {
    return (this.headers = new HttpHeaders()
        .set("Content-Type", "application/json")
        .set("Authorization", `Bearer ${this.getToken()}`)
    );
  }

  delete = (URL: string): Observable<Object> => {
    return this.http.delete(this.local + this.cartaoURL, { headers: this.getHeaders() });
  };

  patch = (URL: string, data: any): Observable<Object> => {
    return this.http.patch(this.local + this.cartaoURL, data, {
      headers: this.getHeaders()
    });
  };

  put = (URL: string, data: any): Observable<Object> => {
    return this.http.put(this.local + this.cartaoURL, data, { headers: this.getHeaders() });
  };
}
