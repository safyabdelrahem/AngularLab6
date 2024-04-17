import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  OnInit,
} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective} from '../../directives/highlight-card.directive';
import { StaticProductService } from '../../services/static-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductComponent implements OnChanges,OnInit {
  products: Iproduct[] =[] as Iproduct[];
  totalOrderPrice: number = 0;
  filteredProducts: Iproduct[];
  id: string = '30101142400443';
  FullDate: string = 'FullDate';
  currentid!: number;
  currentProduct: Iproduct | null = null;
  @Input() recievedCatId: any;


  constructor(
    private _ApiProductsService: ApiProductsService,
    private router: Router,
    private _activatedRoute:ActivatedRoute
  ) {

    this.onClickToBuyProduct = new EventEmitter<Iproduct>();
    this.filteredProducts = this.products;
  }


  @Input() recievedCategoryid: number = 0;

  ngOnInit(): void {
      this._ApiProductsService.getAllProducts().subscribe({
        next:(res)=>{
         this.products=res;
         this.filteredProducts=this.products;
        },
        error:(err)=>{
          console.log(err)
        },
      })

      this._activatedRoute.paramMap.subscribe((paramMap) => {
        this.currentid = Number(paramMap.get('id'));
        this._ApiProductsService.getProductById(this.currentid).subscribe({
          next:(res)=>{
            this.currentProduct=res;
          },
          error:(err)=>{
            console.log(err)
          }

        })
      });
  }

  ngOnChanges() {
   this._ApiProductsService.getProductsByCatId(this.recievedCategoryid).subscribe({
      next:(res)=>{
         this.filteredProducts=res;
      },
      error:(err)=>{
        console.log(err)
      },
    })


  }
  //define event
  @Output() onClickToBuyProduct: EventEmitter<Iproduct>;

  // buy function
  buy(product: Iproduct): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
    //fire event
    this.onClickToBuyProduct.emit(product);
  }

  navigateToDetailsOfProduct(id: number) {
    //this.router.navigateByUrl("/Details")
    //this.router.navigateByUrl(`/Details/${id}`)
    this.router.navigate(['/products', id]);
  }

  deleteProduct(productId: number) {
    this._ApiProductsService. deleteProductById(productId).subscribe({
      next: () => {
        alert("Product deleted successfully!");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  updateProduct(id:number){
    this._ApiProductsService.getProductById(id).subscribe({
      next: (product) => {

        this.router.navigate([`/AddProduct/${id}`],{ state: { product } });
      },
      error: (error) => {
        console.error('Error fetching product:', error);
        // Optionally, handle errors or display error messages
      }
    });
  }
}
