package com.InvSys.InventarySystemWeb.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.InvSys.InventarySystemWeb.Beans.Shop;
import com.InvSys.InventarySystemWeb.Repository.ShopRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ShopController {
	
	@Autowired
	ShopRepository repository;
	
	@RequestMapping(value="/shops",method=RequestMethod.GET)
	@ResponseBody
	public Iterable<Shop> getShops() {
		return repository.findAll();
	}
	
	@RequestMapping(value="/shop/{shopId}",method=RequestMethod.GET)
	@ResponseBody
	public Optional<Shop> getShop(@PathVariable Long shopId) {
		return repository.findById(shopId);
	}
	
	@PostMapping(value="/shop",
			consumes= {MediaType.APPLICATION_JSON_VALUE},
			produces= {MediaType.APPLICATION_JSON_VALUE})
	@ResponseBody
	public Shop createShop(@RequestBody Shop shop){
		return repository.save(shop);
	}
	

}
