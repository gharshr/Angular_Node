import { Component, OnInit } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Edit (event : Event)
  // {
  //   console.log("Hello There");
  //   var x : string[] = ((<HTMLAnchorElement>event.target).href).split('/');
  //   console.log(ListProductComponent.products);
  //   //console.log(this.products);
  //   ListProductComponent.products.splice(Number('x[5]')-1,1);
  //   console.log(ListProductComponent.products); 
  // }

}
