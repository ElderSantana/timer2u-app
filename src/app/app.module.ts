import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimerComponent } from './components/dashboard/timer/timer.component';
import { LogsComponent } from './components/dashboard/logs/logs.component';
import { FormsModule } from '@angular/forms';
import { ApiHttpProvider, httpFactory } from './providers/api-http.provider';
import { HttpModule, Http, XHRBackend, RequestOptions, ConnectionBackend} from '@angular/http';
import { TimerService } from './services/timer.service';
import { StorageService } from './services/storage.service';
import {NgxPaginationModule} from 'ngx-pagination'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    TimerComponent,
    LogsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    {
      provide: ConnectionBackend,
      useClass: XHRBackend
    },
    ApiHttpProvider,
    StorageService,
    TimerService
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
