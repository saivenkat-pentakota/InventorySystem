import { CommonService } from './../../../service/common.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-item-list',
  templateUrl: './shop-item-list.component.html',
  styleUrls: ['./shop-item-list.component.css']
})
export class ShopItemListComponent implements OnInit {
  constructor(public service:CommonService) { }

  ngOnInit(): void {
  }

  checkCategory(cat:string,catarray:string[]){
    return (catarray.indexOf(cat)>-1?true:false);
  }

}
