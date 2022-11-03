import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public id: String;
  user: User;
  constructor(private route: ActivatedRoute, private listuser: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let list: User[];
    list = this.listuser.list.filter(user => user.id.toString() == this.id) as any;
    this.user = list[0]
  }

}
