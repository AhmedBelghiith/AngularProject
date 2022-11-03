import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ProduitService } from 'src/app/core/services/produit.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
public list: Product[];

  constructor(private produitService: ProduitService) { }
  ngOnInit(): void {
    this.list=this.produitService.listProduct.filter(p => p.quantity==0);
  }
  
  SuppProduit(prod: Product){
    this.produitService.SuppProduit(prod);
  }

  delete(p: Product){
    let i = this.list.indexOf(p);
    this.list.splice(i, 1);
    let index = this.produitService.listProduct.indexOf(p);
    this.produitService.listProduct.splice(index,1)
  }
}
