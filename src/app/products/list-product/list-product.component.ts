import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/core/services/produit.service';
import { StatsService } from 'src/app/core/services/stats.service';
import {Product} from "../../core/model/product";
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list: Product[];
  public all: Product[];
  public count: number;
  priceMax: number;

  constructor(private route: ActivatedRoute, private stats: StatsService, private produitService: ProduitService) {
  }
  ngOnInit(): void {
    this.title= 'My App Store';
    this.all=this.produitService.listProduct;

this.count=this.stats.getCount(this.all,'quantity',0)
console.log("hejggjhg")
this.route.params.subscribe(
  (params)=>{
    if(params['category']!=null){
      this.list= this.all.filter((Product)=>
      Product.category==params['category']
      )
    }else{
      this.list= this.all;
    }
  }
)
      /*let category= this.route.snapshot.params['category'];
      if(category!=null){
        this.list = this.list.filter((Product)=> Product.category==category)
      }*/

  }
  incrementLike(product: Product): void{
    let i= this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++
      //connect to the backend side
    }
  }
  buyProduct(product: Product): void{
    let i= this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--
      //connect to the backend side
    }
  }

}
