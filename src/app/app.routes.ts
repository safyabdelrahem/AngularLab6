import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [ 
    {path:'',redirectTo:'Home',pathMatch:'full'},
    {path: 'Home',component:HomeComponent},
    {path:'Login',component:LoginComponent},
    {path:'Products',component:ProductComponent,canActivate:[authGuard]},
    {path:"AddProduct/:id", component: AddProductComponent},
    {path:"AddProduct" ,component: AddProductComponent},
    {path:"products/:id",component:DetailsComponent},
    {path:'Details/:id',component:DetailsComponent},
    {path:'About',component:AboutUsComponent,children:[
        // {path:'',component:VisionComponent},
        {path:'',pathMatch:'full',redirectTo:'Vision'},
        {path:'Vision',component:VisionComponent},
        {path:'Values',component:ValuesComponent}
    ]},
    {path:'**',component:NotFoundComponent}
];
