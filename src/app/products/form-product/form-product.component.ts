import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { ProduitService } from 'src/app/core/services/produit.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  public product: Product;
  constructor(private produitService: ProduitService, private root: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.product= new Product()
  }

  saveProduct(){
    this.produitService.listProduct.push(this.product);
    this.router.navigate(["product/list"])
  }

}
