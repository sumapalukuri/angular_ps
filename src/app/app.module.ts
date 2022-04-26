import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockInterceptor } from './core/Interceptors/http-mock.interceptor';
import { GlobalErrorHandler } from './core/error-handlers/global-error-handler.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMockInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: GlobalErrorHandler, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
