import { Component, OnInit } from '@angular/core';
import { products } from '../models/products';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})

export class ListProductComponent implements OnInit {

  // 
  constructor(private route: ActivatedRoute,  private http: HttpClient) { }
  
  pd : products[] = [];
  // static products = [
  //     {"id":1,"name":"Product1","description":"Incidunt et magni","price":"170.00","quantity":56840},
  //   {"id":2,"name":"Product2","description":"Sint libero mollitia","price":"302.00","quantity":9358},
  //   {"id":3,"name":"Product3","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
  //   {"id":4,"name":"Product4","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
  // ];

  private subscriber: any;

  ngOnInit() {
    console.log("inside the Init")
    this.subscriber = this.route.params.subscribe( params => {
        console.log("Hello");
          this.http.get('/product/list').subscribe((data : any) => {
            data.forEach(em => {
              this.pd.push(em);
              console.log(em.Product_ID);
            });
          } 
        );
      }
    );
  }

  // Delete(event : Event)
  // {
  //   console.log("Hello There");
  //   var x : string[] = ((<HTMLAnchorElement>event.target).href).split('/');
  //   console.log(ListProductComponent.products);
  //   ListProductComponent.products.splice(Number('x[5]')-1,1);
  //   console.log(ListProductComponent.products);
  // }
}