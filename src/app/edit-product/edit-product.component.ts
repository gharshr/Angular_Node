import { Component, OnInit, Input } from '@angular/core';
import { products } from '../models/products';
import { selectedProduct} from '../service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit { 

  constructor() { }

  ngOnInit() {
  }

  model : products = new products();

  Edit1 (event : products)
  {
    console.log("edit1 is called");  
     
    // @Input('master') masterName: string;
    // console.log("Hello There");
    // this.model = event; 
    // console.log(event);
  // var x : string[] = ((<HTMLAnchorElement>event.target).href).split('/');
  //   console.log(ListProductComponent.products);
  //   //console.log(this.products);
  //   ListProductComponent.products.splice(Number('x[5]')-1,1);
  //   console.log(ListProductComponent.products); 
  }

}
