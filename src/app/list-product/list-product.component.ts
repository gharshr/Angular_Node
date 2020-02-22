import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { products } from '../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { selectedProduct } from '../service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  providers: [selectedProduct]
})

export class ListProductComponent implements OnInit {

  // 
  constructor(private route: ActivatedRoute,  private http: HttpClient, private router: Router, private SelectedProduct: selectedProduct) { }
  
  pd : products[] = [];
  // static products = [
  //   {"id":1,"name":"Product1","description":"Incidunt et magni","price":"170.00","quantity":56840},
  //   {"id":2,"name":"Product2","description":"Sint libero mollitia","price":"302.00","quantity":9358},
  //   {"id":3,"name":"Product3","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
  //   {"id":4,"name":"Product4","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
  // ];

  private subscriber: any;

  model : products;

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

  @Output() message = new EventEmitter<products>();

  loadedisproduct = 'lpd';
  
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(files.item(0));
  }

  uploadFileToActivity() {
    this.SelectedProduct.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
  
  Edit1 (event : products)
  {
    this.uploadFileToActivity();
    console.log("edit1 is called");
    this.http.post('/product/edit',this.model).subscribe((data:any) => {
      console.log(data);
      if(data.Status == 'Successfull') {
        alert("Successfully Updated");
        this.loadedisproduct = "lpd";
      }
      else {
        alert("Unable to update");
      }
    });
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
  
  Edit (ab : products)
  {
    // console.log("Hello There");
    // this.model = ab;
    // this.message.emit(ab);
    this.loadedisproduct = 'epd';
    console.log(ab);
    this.model = ab;
  }
  
  Delete(ab : products)
  {
    this.loadedisproduct = 'dpd';
    console.log(ab);
    this.model = ab; 
  //   console.log("Hello There");
  //   var x : string[] = ((<HTMLAnchorElement>event.target).href).split('/');
  //   console.log(ListProductComponent.products);
  //   ListProductComponent.products.splice(Number('x[5]')-1,1);
  //   console.log(ListProductComponent.products);
  }

  Delete1 (event : products)
  {
    console.log("delete1 is called");
    this.http.post('/product/delete',this.model.Product_ID).subscribe((data:any) => {
      console.log(data);
      if(data.Status == 'Successfull') {
        alert("Successfully Updated");
        this.loadedisproduct = "lpd";
      }
      else {
        alert("Unable to delete");
      }
    });
  }
}