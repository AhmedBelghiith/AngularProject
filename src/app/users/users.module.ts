import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    UsersComponent,
    ListUserComponent,
    ProfileComponent,
    FormUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
