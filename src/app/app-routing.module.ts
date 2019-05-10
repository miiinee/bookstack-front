import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { MyComponent } from './components/my/my.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: ''},
  { path: 'create', component: CreateComponent},
  { path: 'bookmark', component: BookmarkComponent},
  { path: 'my', component: MyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
