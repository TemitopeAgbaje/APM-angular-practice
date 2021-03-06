import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacePipe,
    
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'product',component: ProductListComponent,
      },
      {
        path: 'product/:id',
        canActivate:[ProductDetailGuard],
        component: ProductDetailsComponent,
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
