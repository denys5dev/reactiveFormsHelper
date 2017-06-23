import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroupName } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildFormComponent } from './childForm/childForm.component';
import { DynamicComponent } from './dynamicForms/dynamicForms.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildFormComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormGroupName],
  bootstrap: [AppComponent]
})
export class AppModule { }
