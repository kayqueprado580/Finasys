import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { GlobalComponent } from './components/css/global/global.component';

@NgModule({
  declarations: [BreadCrumbComponent, PageHeaderComponent, FormFieldErrorComponent, ServerErrorMessagesComponent, GlobalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    //shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    //shared components
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    GlobalComponent
  ]
})
export class SharedModule { }
