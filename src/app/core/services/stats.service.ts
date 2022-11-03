import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }
  getCount(list: any[],creteria: string,value: any):number{
    let count=0;
    for(let i in list){
      if(list[i][creteria]===value){
        count++;
      }
    }
    return count;
  }
}
