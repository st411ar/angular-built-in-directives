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
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';

export const examples: ExampleModel[] = [
	{
		label: 'Intro',
		path: ''
	},
	{
		label: 'NgClass',
		path: 'ng_class'
	},
	{
		label: 'NgFor',
		path: 'ng_for'
	},
	{
		label: 'NgIf',
		path: 'ng_if'
	},
	{
		label: 'NgStyle',
		path: 'ng_style'
	},
	{
		label: 'NgSwitch',
		path: 'ng_switch'
	},
//  {label:	'NgNonBindable'}
];

const routes: Routes = [
	{
		path: '',
		component: IntroComponent,
		pathMatch: 'full'
	},
	{
		path: 'ng_class',
		component: NgClassExampleComponent,
		pathMatch: 'full'
	},
	{
		path: 'ng_for',
		component: NgForExampleComponent,
		pathMatch: 'full'
	},
	{
		path: 'ng_if',
		component: NgIfExampleComponent,
		pathMatch: 'full'
	},
	{
		path: 'ng_style',
		component: NgStyleExampleComponent,
		pathMatch: 'full'
	},
	{
		path: 'ng_switch',
		component: NgSwitchExampleComponent,
		pathMatch: 'full'
	},
];

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		SidebarItemComponent,
		IntroComponent,
		NgClassExampleComponent,
		NgForExampleComponent,
		NgIfExampleComponent,
		NgStyleExampleComponent,
		NgSwitchExampleComponent,
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
