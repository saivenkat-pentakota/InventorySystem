package com.InvSys.InventarySystemWeb.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.InvSys.InventarySystemWeb.Beans.Shop;

@Repository
public interface ShopRepository extends CrudRepository<Shop, Long>  {

}
