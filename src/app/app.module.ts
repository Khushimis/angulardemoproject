import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GenderpipePipe } from './pipes/genderpipe.pipe';
import { AboutComponent } from './components/about/about.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';

import { ClassdemoComponent } from './components/classdemo/classdemo.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    EmployeeComponent,
    GenderpipePipe,
    AboutComponent,
    EmployeeListComponent,
    ReactiveformComponent,
    UserComponent,
    AddUserComponent,
    BindingDemoComponent,
    
    ClassdemoComponent,
    
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
