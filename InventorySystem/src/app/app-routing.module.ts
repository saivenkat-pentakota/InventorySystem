import { ShopItemCardComponent } from './components/shop/shop-item-card/shop-item-card.component';
import { ShopCardComponent } from './components/shop/shop-card/shop-card.component';
import { ShopDetailsComponent } from './components/shop/shop-details/shop-details.component';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopItemListComponent } from './components/shop/shop-item-list/shop-item-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/shopHome', pathMatch: 'full'},
  {path: 'shopHome', component:ShopHomeComponent},
  {path: 'topnav', component:TopnavComponent},
  {path: 'bottomnav', component:BottomnavComponent},
  {path: 'shopDetails', component:ShopDetailsComponent},
  {path: 'shopItemList', component:ShopItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
