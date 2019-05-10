import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MyComponent } from './components/my/my.component';
import { CreateComponent } from './components/create/create.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardComponent,
    MyComponent,
    CreateComponent,
    BookmarkComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
