import { CommonService } from './../../../service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopitems',
  templateUrl: './shopitems.component.html',
  styleUrls: ['./shopitems.component.css']
})
export class ShopitemsComponent implements OnInit {

  constructor(public service:CommonService) { }

  ngOnInit(): void {
  }

}
