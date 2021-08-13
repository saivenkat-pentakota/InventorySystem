package com.InvSys.InventarySystemWeb.Beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Shop {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long shopId;
	private String shopName;
	private String shopImg;
	private String shopDescription;
	private String rating;
	private String shopTiming;
	private String discount;
	private boolean open;


	public boolean isOpen() {
		return open;
	}

	public void setOpen(boolean open) {
		this.open = open;
	}

	protected Shop() {

	}
	
	public Shop(String shopName,String shopImg,String shopDescription,String rating,String shopTiming,String discount) {
		this.shopName = shopName;
		this.shopImg = shopImg;
		this.shopDescription = shopDescription;
		this.rating = rating;
		this.shopTiming = shopTiming;
		this.discount = discount;
	}

	@Override
	public String toString() {
		return String.format(
				"Shop[shopId=%d, shopName='%s', shopImg='%s', shopDescription='%s', rating='%s', shopTiming='%s', discount='%s']",
				shopId, shopName, shopImg, shopDescription, rating, shopTiming, discount);
	}
	public Long getShopId() {
		return shopId;
	}

	public void setShopId(Long shopId) {
		this.shopId = shopId;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getShopImg() {
		return shopImg;
	}

	public void setShopImg(String shopImg) {
		this.shopImg = shopImg;
	}

	public String getShopDescription() {
		return shopDescription;
	}

	public void setShopDescription(String shopDescription) {
		this.shopDescription = shopDescription;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getShopTiming() {
		return shopTiming;
	}

	public void setShopTiming(String shopTiming) {
		this.shopTiming = shopTiming;
	}

	public String getDiscount() {
		return discount;
	}

	public void setDiscount(String discount) {
		this.discount = discount;
	}

}
