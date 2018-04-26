import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ExampleModel } from './models/example.model';

export const examples: ExampleModel[] = [
  {label:	'Intro'},
  {label:	'NgFor'},
  {label:	'NgSwitch'},
  {label:	'NgStyle'},
  {label:	'NgClass'},
  {label:	'NgNonBindable'}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
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
