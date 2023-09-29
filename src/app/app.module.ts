import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ZooState } from './store/zoo';
import { SocietyState } from './store/society';
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from './store/users';
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([ZooState, SocietyState, UserState]),
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot({ name: 'KPSTATE' })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
