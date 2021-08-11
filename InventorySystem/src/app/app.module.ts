import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { ShopDetailsComponent } from './components/shop/shop-details/shop-details.component';
import { ShopCardComponent } from './components/shop/shop-card/shop-card.component';
import { ShopitemsComponent } from './components/shop/shopitems/shopitems.component';
import { ShopItemCardComponent } from './components/shop/shop-item-card/shop-item-card.component';
import { ShopCartComponent } from './components/shop/shop-cart/shop-cart.component';
import { ShopItemListComponent } from './components/shop/shop-item-list/shop-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ShopHomeComponent,
    BottomnavComponent,
    ShopDetailsComponent,
    ShopCardComponent,
    ShopitemsComponent,
    ShopItemCardComponent,
    ShopCartComponent,
    ShopItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
