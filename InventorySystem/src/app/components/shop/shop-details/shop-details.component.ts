import { CommonService } from './../../../service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  constructor(public service:CommonService) { }

  ngOnInit(): void {
  }

}
