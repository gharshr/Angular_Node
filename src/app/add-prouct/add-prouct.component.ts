import { Component, OnInit } from '@angular/core';
import { ListProductComponent} from '../list-product/list-product.component';

@Component({
  selector: 'app-add-prouct',
  templateUrl: './add-prouct.component.html',
  styleUrls: ['./add-prouct.component.css']
})
export class AddProuctComponent implements OnInit {

  constructor() {
    console.log("fadf");
  }

  ngOnInit() {
  }

  // Add(event : Event)
  // {
  //   console.log("Add method called");
  //   var x : string[] = ((<HTMLAnchorElement>event.target).href).split(';');
  //   x = x[x.length-1].split('=');
  //   ListProductComponent.products.push({"id":ListProductComponent.products.length,"name":x[1],"description":"Incidunt et magni","price":"170.00","quantity":56840});
  //   console.log(ListProductComponent.products);
  // }
}
