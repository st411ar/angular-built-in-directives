import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ExampleModel } from './models/example.model';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';

export const examples: ExampleModel[] = [
  {label:	'Intro'},
//  {label:	'NgFor'},
//  {label:	'NgSwitch'},
//  {label:	'NgStyle'},
//  {label:	'NgClass'},
//  {label:	'NgNonBindable'}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'ExampleModels',	useValue: examples }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
