import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { UpdateQuoteComponent } from './components/update-quote/update-quote.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { LoginComponent } from './pages/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateQuoteComponent,
    UpdateQuoteComponent,
    QuoteListComponent,
    QuoteDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }