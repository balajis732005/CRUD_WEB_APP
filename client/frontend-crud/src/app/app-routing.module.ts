import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
//import { authGuard } from './gaurd/auth.guard';
import { RegisterOtpVerifyComponent } from './components/registerotpverify/registerotpverify.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import {authGuard} from "./gaurd/auth.guard";

const routes: Routes = [
  {path : '' , component : WelcomeComponent},
  {path : 'register' , component : RegistrationComponent},
  {path : 'registerotpverify' , component : RegisterOtpVerifyComponent},
  {path : 'forgetpassword' , component : ForgetpasswordComponent,canActivate:[authGuard]},
  {path : 'newpassword' , component : NewpasswordComponent,canActivate:[authGuard]},
  {path : 'login' , component : LoginComponent},
  {path : 'home' , component : HomeComponent,canActivate:[authGuard]},
  {path : 'update' , component : UpdateComponent,canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
