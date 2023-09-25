import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MenuComponent } from './menu/menu.component';
import { ClienteModule } from './pages/cliente/cliente.module';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
    ],
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        NgxMaskDirective,
        NgxMaskPipe,
        ClienteModule,
    ],
    providers: [provideNgxMask()],
    bootstrap: [AppComponent],
})
export class AppModule { }