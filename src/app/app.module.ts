import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { RecieptItemComponent } from './reciept-item/reciept-item.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ListComponent } from './list/list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecieptItemComponent,
    ShoppingEditComponent,
    ListComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
