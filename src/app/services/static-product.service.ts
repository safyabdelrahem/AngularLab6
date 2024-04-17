import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
products:Iproduct[]
  constructor() {
    this.products =[
      {id:100,name:"Dell laptop",price:500000,quantity:3,imgUrl:'https://fakeimg.pl/300/',catId:1},
      {id:200,name:"HP laptop",price:500000,quantity:0,imgUrl:'https://fakeimg.pl/300/',catId:1},
      {id:300,name:"Iphone",price:3054545,quantity:2,imgUrl:'https://fakeimg.pl/300/',catId:2},
      {id:400,name:"oppo ",price:60000,quantity:1,imgUrl:'https://fakeimg.pl/300/',catId:2},
      {id:500,name:"samsung tablet",price:20000,quantity:0,imgUrl:'https://fakeimg.pl/300/',catId:3},
      {id:600,name:"Lenovo tablet",price:10000,quantity:4,imgUrl:'https://fakeimg.pl/300/',catId:3}

    ]
   }

   getAllProducts():Iproduct[]{
    return this.products;
   }

   getProductById(id:number):Iproduct|null{
   let foundProduct= this.products.find((prd)=>prd.id==id)
  return foundProduct?foundProduct:null
   }

   getProductsByCatId(catId:number):Iproduct[]{
    if(catId ==0){
    return this.products
    }else{
      return this.products.filter((prd)=>prd.catId==catId)
    }
   }

   mapProductsToIds():number[]{
  return this.products.map((prd)=>prd.id)

   }
}
