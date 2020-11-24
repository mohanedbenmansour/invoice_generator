import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private http: HttpClient) {}
  createPost(post: FormData) {
    return this.http.post('http://localhost:8000/invoice/create', post);
  }
  getPost(user:string,post:string){
    return this.http.get('http://localhost:8000/invoice/getinvoice/'+user+"/"+post);

  }
}
