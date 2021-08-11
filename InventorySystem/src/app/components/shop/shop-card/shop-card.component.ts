import { CommonService } from './../../../service/common.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {

  @Input() shop:any={};
  constructor(public service:CommonService) { }

  ngOnInit(): void {
  }

}
