import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioModule } from './formulario/formulario.module';
import { TuPageFormComponent } from './tu-page-form/tu-page-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TuPageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormularioModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
