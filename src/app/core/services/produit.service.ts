import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  listProduct: Product[]=[
    {id:12,
     title: 'T-shirt 1',
     price: 28,
     nbrLike: 40,
     description: 'nice T-shirt',
     category: 'women',
     quantity: 3,
     picture:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F55%2Fff55f8591a27acf2678a6f531add67167d41993a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    },
    {
      id: 13,
      title: 'T-shirt 2',
      price: 18,
      nbrLike: 40,
      description: 'nice T-shirt',
      category: 'women',
      quantity: 2,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F94%2Fa0%2F94a0f95305117dab710e5e5a829422b43dde52e2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
    },
    {id:14,
      title: 'Outfit 1',
      price: 280,
      nbrLike: 0,
      description: 'nice T-shirt',
      category: 'men',
      quantity: 1,
      picture:'http://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F42%2F31%2F4231ea87da0d835e0a19486450d2d233cfdc2564.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    },
]


  constructor() { }

  SuppProduit(prod: Product){
    let i = this.listProduct.indexOf(prod);
    if (i != -1){this.listProduct.splice(i,1);
    }
  }

  getProduit(id:number): any{
    for(let i in this.listProduct){
      if(this.listProduct[i]['id']==id){
        return this.listProduct[i]
      }
    }
}
updateProduit(product: Product){
  for(let prod of this.listProduct){
    if(prod.id===product.id){
      prod=product
    }
}
}
}
