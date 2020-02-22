import { Injectable } from '@angular/core';
import { products } from './models/products';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class selectedProduct {
  constructor(private http:HttpClient) {}
  public pd = new products();
  postFile(fileToUpload: File) {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    let headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    //headers.append('Authorization',this.basic);
    let options = {headers:headers};
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    console.log(formData);
    console.log(fileToUpload);
    //return new Observable;
    return this.http.post("/image", formData, {headers:headers});
  }
}