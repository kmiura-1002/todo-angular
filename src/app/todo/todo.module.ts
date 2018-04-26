import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo/todo.component';
import { TodoItemViewComponent } from './todo-item-view/todo-item-view.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { PageTemplateComponent } from './page-template/page-template.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoComponent,
    TodoItemViewComponent,
    TodoItemComponent,
    NavComponent,
    FooterComponent,
    PageTemplateComponent
  ],
  providers: [AuthService],
})
export class TodoModule { }
