import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoCommonRoutingModule } from './todoCommon-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PageTemplateComponent } from './page-template/page-template.component';

@NgModule({
  imports: [
    CommonModule,
    TodoCommonRoutingModule
  ],
  declarations: [NavComponent, FooterComponent, PageTemplateComponent]
})
export class TodoCommonModule { }
