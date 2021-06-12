import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserPageComponent } from './delete-user-page/delete-user-page.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users.component';
import { ViewallUserComponent } from './viewall-user/viewall-user.component';

const routes: Routes = [
  { path: '', component: ViewallUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'update-user/:id', component: EditUserComponent },
  { path: 'delete-user/:id', component: DeleteUserComponent },
  { path: 'delete-user', component: DeleteUserPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
 