import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEffect } from './store/effect/register.effect';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffect } from './store/effect/login.effect';
import { updateEffect } from './store/effect/update.effect';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DeleteEffect } from './store/effect/delete.effect';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterOtpVerifyEffect } from './store/effect/registerotpverify.effect';
import { RegisterOtpVerifyComponent } from './components/registerotpverify/registerotpverify.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { ForgetPasswordEmailSendEffect } from './store/effect/forgetpasswordemailsend';
import { ForgetPasswordOtpVerifyEffect } from './store/effect/forgetpasswordotpverify.effect';
import { NewPasswordChangeEffect } from './store/effect/newpasswordchange.effect';
import { ToastrModule } from 'ngx-toastr';
import { NavbarafterloginComponent } from './components/navbarafterlogin/navbarafterlogin.component';
import {NgOptimizedImage} from "@angular/common";
import {reducer} from "./store/reducer/reducer";
import {storageSyncMetaReducer} from "ngrx-store-persist";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavbarComponent,
    LoginComponent,
    UpdateComponent,
    HomeComponent,
    DialogBoxComponent,
    WelcomeComponent,
    RegisterOtpVerifyComponent,
    ForgetpasswordComponent,
    NewpasswordComponent,
    NavbarafterloginComponent
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({userEntity : reducer}, {metaReducers : [storageSyncMetaReducer]}),
        EffectsModule.forRoot([UserEffect
            , AuthEffect
            , updateEffect
            , DeleteEffect
            , RegisterOtpVerifyEffect
            , ForgetPasswordEmailSendEffect
            , ForgetPasswordOtpVerifyEffect
            , NewPasswordChangeEffect]),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
        BrowserAnimationsModule,
        MatDialogModule,
        ToastrModule.forRoot(),
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
