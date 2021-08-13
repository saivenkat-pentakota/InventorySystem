import { HttpCommonService } from './http-common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  activeComponent = 1;
  shopDetails:any = [];
// item details.................................
  itemDetails = [{
    "itemImg":"https://img1.exportersindia.com/product_images/bc-full/2019/5/5118241/5-star-chocolate-1558517535-4919038.jpeg",
    "itemName":"fivestar choclate",
    "itemPrice":" price:5rs",
    "itemCategory":["CAT-01","CAT-02"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  },
  {
    "itemImg":"https://i2.wp.com/lmld.org/wp-content/uploads/2020/05/Homemade-white-bread-7.jpg",
    "itemName":"fruit&nut bread",
    "itemPrice":"price:50rs",
    "itemCategory":["CAT-01","CAT-03"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  },
  {
    "itemImg":"https://image.shutterstock.com/image-vector/vector-milk-carton-icon-dairy-260nw-1094909261.jpg",
    "itemName":"500ml milk packet",
    "itemPrice":"price:25rs",
    "itemCategory":["CAT-05"],
    "itemDescription":"vishaka dairy milk product",
  },
  {
    "itemImg":"https://5.imimg.com/data5/UY/JT/MY-48969557/sunfeast-dark-fantasy-choco-fills-500x500.png",
    "itemName":"Dark Fantasy biscuits",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-04"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  },
  {

    "itemImg":"https://www.innovativehomecare.com/wp-content/uploads/2020/09/benefits-of-onions-1536x1239.jpg",
    "itemName":"onions",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-03","CAT-02"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  },
  {
    "itemImg":"https://www.bigbasket.com/media/uploads/p/s/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg",
    "itemName":"eggs",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-04","CAT-02"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  },
  {
    "itemImg":"https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/0fc87635-50da-427a-b2c2-b6763df4fafb/bacadb21-320a-49d7-9d87-ffeff44ae8d4/hp_b&h_m_afforble-makeup_480_250721_03.jpg",
    "itemName":"makeup products",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-01","CAT-05"],
    "itemDescription":"vishaka dairy milk product",
  },
  {
    "itemImg":"https://4.imimg.com/data4/LP/PV/NSDMERP-3386030/harppictoiletwash-500x500.png",
    "itemName":"harppic",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-02"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  },
  {

    "itemImg":"https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/0fc87635-50da-427a-b2c2-b6763df4fafb/bacadb21-320a-49d7-9d87-ffeff44ae8d4/hp_b&h_m_mask_m_480_250721_01.jpg",
    "itemName":"mask/gloves",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-01","CAT-03"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  },
  {
    "itemImg":"https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/0fc87635-50da-427a-b2c2-b6763df4fafb/6fb76841-544c-484d-a7fd-2e42c7ab77be/hp_bev_m_tea_184_250721_02.jpg",
    "itemName":"tea",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-05"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  },
  {
    "itemImg":"https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/0fc87635-50da-427a-b2c2-b6763df4fafb/6fb76841-544c-484d-a7fd-2e42c7ab77be/hp_bev_m_instan-coffee_184_250721_04.jpg",
    "itemName":"coffee",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-04"],
    "itemDescription":"vishaka dairy milk product",
  },
  {
    "itemImg":"https://www.bigbasket.com/media/customPage/355c27b8-a44f-4900-a390-8e82c69b8021/0fc87635-50da-427a-b2c2-b6763df4fafb/d6f968b3-f348-42c5-af3a-bb813eb0c2b3/hp_sbf_m_noodles-dips_m_480_250721_03.jpg",
    "itemName":"noodels",
    "itemPrice":"price:10rs",
    "itemCategory":["CAT-03"],
    "itemDescription":"caramel and nougat mix covered with smooth milk chocolate",
  }

  ]

// .................................................................................
  constructor(private router:Router, private httpCommon:HttpCommonService) { }

  openShopHome(){
    this.router.navigate(['shopHome']);
  }
  openShopItems(){
    this.router.navigate(['shopItemList']);
  }

  async getShops(){
   this.httpCommon.getShops().subscribe(data=>{
     this.shopDetails = data;
   });
  }

}
