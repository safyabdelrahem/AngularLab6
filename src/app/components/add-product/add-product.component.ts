import { Component, OnInit } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { ApiProductsService } from '../../services/api-products.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
 
templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  categories:Icategory[]
  newProduct:Iproduct={} as  Iproduct;
  currentId: number=0;
  productData: Iproduct|null=null;
  constructor(private _apiProducts:ApiProductsService,private router:Router,private _activatedRoute:ActivatedRoute){
    this.categories=[
      {
        id: 10,
        name: "Mobiles"
      },
      {
        id: 20,
        name: "Laptops"
      },
      {
        id: 30,
        name: "Tablets"
      }
    ]
  }
  ngOnInit(){

  }
  addProduct(){
    this._apiProducts.addProduct(this.newProduct).subscribe({
      next:()=>{
        showAlert();
        this.router.navigateByUrl('/products')
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
 

}
function showAlert() {
  Swal.fire({
      title: 'Product Added!',
      text: 'You have added the product successfully!',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
}