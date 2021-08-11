import { CommonService } from './../../service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrls: ['./bottomnav.component.css']
})
export class BottomnavComponent implements OnInit {

  constructor(public service:CommonService) { }

  ngOnInit(): void {
  }

}
