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
  public crud: string;
constructor(private produitService: ProduitService,
  private router:Router, private root: ActivatedRoute) { }

ngOnInit(): void {
  let id= this.root.snapshot.params['id'];
  if(id!=null){
    this.crud="update";
    this.product= this.produitService.getProduit(id);
  }else
  { this.crud="add";
    this.product = new Product();}
}
saveProduct(){
  if(this.crud=='add')
  {this.product.nbrLike=0;
  this.produitService.listProduct.push(this.product);
  this.router.navigate(['/product/list'])}
  else {
    this.produitService.updateProduit(this.product)
    this.router.navigate(['/product/list'])
  }
}
}
