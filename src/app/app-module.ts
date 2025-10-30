import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { TasksModule } from './tasks/tasks-module';
import { SharedModule } from './shared/card/shared-module';

@NgModule({
  declarations: [
    App,
    Header,
    User
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TasksModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
