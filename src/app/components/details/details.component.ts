import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { Iproduct } from '../../models/iproduct';
import {Location} from '@angular/common'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  currentId:number=0;
  product:Iproduct|null=null;
  idArray:number[];
  currentIdIndex:number=0;
constructor(private _activatedRouted:ActivatedRoute,
  private _stativService:StaticProductService,
  private router:Router,
  private _location:Location){
this.idArray=this._stativService.mapProductsToIds();
}
  ngOnInit(): void {
    this._activatedRouted.paramMap.subscribe((paramMap)=>{
      this.currentId=Number(paramMap.get('id'))
      this.product=this._stativService.getProductById(this.currentId)
    });
//  this.currentId=Number(this._activatedRouted.snapshot.paramMap.get("id"))
//  this.product=this._stativService.getProductById(this.currentId)
  }

  goBack(){
 this._location.back()
  }

  next(){
    // let idArray=this._stativService.mapProductsToIds()
   this.currentIdIndex=this.idArray.findIndex((id)=>id==this.currentId);
   if(this.currentIdIndex!=this.idArray.length-1){
    this.router.navigateByUrl(`/Details/${this.idArray[this.currentIdIndex+1]}`)
   }

  }
  prev(){
    this.currentIdIndex=this.idArray.findIndex((id)=>id==this.currentId);
    if(this.currentIdIndex!=0){
      this.router.navigateByUrl(`/Details/${this.idArray[this.currentIdIndex-1]}`)
    }

  }
}
