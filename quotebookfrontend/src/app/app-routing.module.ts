import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { UpdateQuoteComponent } from './components/update-quote/update-quote.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
  
  { path: 'quotes', component: QuoteListComponent },
  { path: 'addquote', component: CreateQuoteComponent },
  { path: 'updatequote/:id', component: UpdateQuoteComponent },
  { path: 'quotedetails/:id', component: QuoteDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
