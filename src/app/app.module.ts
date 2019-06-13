import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatIconModule, 
         MatButtonModule, MatCardModule, MatDividerModule, 
         MatInputModule, MatFormFieldModule, MatDialogModule,
         MatProgressBarModule, MatProgressSpinnerModule
      } from '@angular/material';
import { StarRatingModule } from 'angular-star-rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MyComponent } from './components/my/my.component';
import { CreateComponent } from './components/create/create.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { SearchComponent } from './components/search/search.component';
import { BookComponent } from './shared/components/book/book.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    StarRatingModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardComponent,
    MyComponent,
    CreateComponent,
    BookmarkComponent,
    SearchComponent,
    BookComponent,
    DialogComponent
  ],
  entryComponents: [
    SearchComponent,
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
