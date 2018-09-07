import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-if-example',
	templateUrl: './ng-if-example.component.html'
})
export class NgIfExampleComponent implements OnInit {
	a: number = 4;
	b: number = 3;
	str: string = `yes`;

	constructor() {}

	ngOnInit() {}

	myFunc(): boolean {
		return true;
	}
}
