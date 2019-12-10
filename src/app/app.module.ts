import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonMenuComponent } from './mon-menu/mon-menu.component';
import { SomeFrameworksComponent } from './some-frameworks/some-frameworks.component';
import { UpdateFrameworkComponent } from './update-framework/update-framework.component';
import { IntrouvableComponent } from './introuvable/introuvable.component';
import { FrameworksComponent } from './frameworks/frameworks.component';

@NgModule({
  declarations: [
    AppComponent,
    MonMenuComponent,
    SomeFrameworksComponent,
    UpdateFrameworkComponent,
    IntrouvableComponent,
    FrameworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
