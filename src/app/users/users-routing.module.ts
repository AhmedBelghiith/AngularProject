import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from '../products/list-product/list-product.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent,
   children:[
  {path:'list',component: ListProductComponent},
  {path: 'new', component: FormUserComponent},
  {path: 'profil', component: ProfileComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
