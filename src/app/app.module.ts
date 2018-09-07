import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
	RouterModule,
	Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ExampleModel } from './models/example.model';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';

export const examples: ExampleModel[] = [
	{
		label: 'Intro',
		path: ''
	},
	{
		label: 'NgIf',
		path: 'ng_if'
	},
	{
		label: 'NgFor',
		path: 'ng_for'
	},
//  {label:	'NgSwitch'},
//  {label:	'NgStyle'},
//  {label:	'NgClass'},
//  {label:	'NgNonBindable'}
];

const routes: Routes = [
	{
		path: '',
		component: IntroComponent,
		pathMatch: 'full'
	},
	{
		path: 'ng_if',
		component: NgIfExampleComponent,
		pathMatch: 'full'
	},
	{
		path: 'ng_for',
		component: NgForExampleComponent,
		pathMatch: 'full'
	},
];

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		SidebarItemComponent,
		IntroComponent,
		NgIfExampleComponent,
		NgForExampleComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		{ provide: 'ExampleModels',	useValue: examples }
	],
	bootstrap: [AppComponent]
})

export class AppModule {}
