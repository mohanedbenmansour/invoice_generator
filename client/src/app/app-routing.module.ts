import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexPageComponent} from "./index-page/index-page.component"
import {HomeComponent} from "./home/home.component"
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {InvoicesComponent} from "./invoices/invoices.component"
import { AuthComponent } from './auth/auth.component';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';

const routes: Routes = [
  { path: 'index', component: IndexPageComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
 
  {
    path: 'home',
    component: HomeComponent,

    children: [{ path: 'signIn', component: SignInComponent }],
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [{ path: 'SignUp', component: SignUpComponent }],
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [{ path: 'auth', component:AuthComponent }],
  },
  
  {
    path: 'home',
    component: HomeComponent,

    children: [{ path: 'invoice', component: InvoiceComponent }],
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [{ path: 'invoices', component: InvoicesComponent }],
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [{ path: 'invoicepreview/:postId', component: InvoicePreviewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
