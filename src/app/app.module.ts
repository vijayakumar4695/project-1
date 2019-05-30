import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { AudiComponent } from './audi/audi.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { HttpClientModule }    from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { VieworderidComponent } from './vieworderid/vieworderid.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AudiComponent,
    CreateorderComponent,
    ListComponent,
    VieworderidComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,

    RouterModule.forRoot([
     {path:"",pathMatch:"full",redirectTo:'login'},
     {path:'login',component:LoginComponent},
     {path:'signup',component:SignupComponent},
     {path:'Audi',component:AudiComponent,
     children:[
     {path:'createorder',component:CreateorderComponent},
     {path:'list',component:ListComponent},
     {path:'vieworderid/:id',component:VieworderidComponent},
     {path:'update/:id',component:UpdateComponent}
    ]},
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
