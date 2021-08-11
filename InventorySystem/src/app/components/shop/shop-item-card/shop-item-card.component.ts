import { CommonService } from './../../../service/common.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-item-card',
  templateUrl: './shop-item-card.component.html',
  styleUrls: ['./shop-item-card.component.css']
})
export class ShopItemCardComponent implements OnInit {
  @Input() item:any={};
  constructor(public service:CommonService) { }

  ngOnInit(): void {
  }

}
