import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    let id = this.router.parseUrl(this.location.path());
    // let fragments = ;
    // console.log(fragments);
  }

  
  // Delete(event : any)
  // {
  //   console.log("Hello There");
  // }

}
