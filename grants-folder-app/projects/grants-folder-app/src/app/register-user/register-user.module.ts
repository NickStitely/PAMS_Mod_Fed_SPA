import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user.component';
import { MyLibModule } from '@NickStitely/my-lib';

const routes: Routes = [
  {
    path: '',
    component: RegisterUserComponent
  }
];

@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MyLibModule
  ],
  exports: [
    RegisterUserComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RegisterUserModule { }
