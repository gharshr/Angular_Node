import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { products } from '../models/products';
import { Options } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-add-prouct',
  templateUrl: './add-prouct.component.html',
  styleUrls: ['./add-prouct.component.css']
})
export class AddProuctComponent implements OnInit {

  constructor(private http: HttpClient) {
    console.log("fadf");
  }

  model = new products();

  ngOnInit() {
  }

  Add(event : Event)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    this.http.post('/product',{
      "id": 12,
      "name": "Kiwi",
      "quantity": 25,
      "price": "52",
      "description": "Seeded Fruit with Sour & Sweet in taste"
    }, { headers: headers }).subscribe((data:any) => {
      console.log(data);
    });
    console.log("asdf");
    // console.log("Add method called");
    // var x : string[] = ((<HTMLAnchorElement>event.target).href).split(';');
    // x = x[x.length-1].split('=');
    // ListProductComponent.products.push({"id":ListProductComponent.products.length,"name":x[1],"description":"Incidunt et magni","price":"170.00","quantity":56840});
    // console.log(ListProductComponent.products);
  }
}
