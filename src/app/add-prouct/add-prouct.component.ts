import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../models/products';

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
    this.http.post('/product/add',this.model).subscribe((data:any) => {

    });
    console.log("asdf");
    // console.log("Add method called");
    // var x : string[] = ((<HTMLAnchorElement>event.target).href).split(';');
    // x = x[x.length-1].split('=');
    // ListProductComponent.products.push({"id":ListProductComponent.products.length,"name":x[1],"description":"Incidunt et magni","price":"170.00","quantity":56840});
    // console.log(ListProductComponent.products);
  }
}
