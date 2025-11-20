import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
//import { MyLibModule } from '@NickStitely/my-lib';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent
  }
];

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    //MyLibModule
  ]
})
export class TasksModule { }
