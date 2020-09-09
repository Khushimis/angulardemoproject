import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent} from './components/add-user/add-user.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
import { ClassdemoComponent } from './components/classdemo/classdemo.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'contact',component:ContactsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'emp', component: EmployeeComponent},
  { path: 'list' , component: EmployeeListComponent},
  { path: 'reactive-form', component:ReactiveformComponent},
  { path: 'user', component:UserComponent},
  { path: 'add-user',component:AddUserComponent},
   { path: 'binding-Demo', component:BindingDemoComponent},
   { path: 'classdemo', component:ClassdemoComponent},
   { path: 'edit-user', component:EditUserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
