import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletatiPage } from './completati/completati.page';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { TodosPage } from './todos/todos.page';
import { FormListComponent } from './form-list/form-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletatiPage,
    FooterComponent,
    FormComponent,
    NavComponent,
    TodosPage,
    FormListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
