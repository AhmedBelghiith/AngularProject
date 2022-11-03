import { User } from '../../core/model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public title: String;
  public list: User[];
  public all: User[];  

  constructor(private route: ActivatedRoute, private listuser: UserService) { }
  ngOnInit(): void {
    this.list=this.listuser.list
    /*this.route.params.subscribe(
      (params)=>{
        if(params['id']!=null){
          this.list= this.all.filter((User)=>
          User.id==params['id']
          )
        }else{
          this.list= this.all;
        }
      }
    )*/
  }


}
