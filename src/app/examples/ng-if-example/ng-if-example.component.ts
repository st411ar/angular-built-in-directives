import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-if-example',
	templateUrl: './ng-if-example.component.html'
})
export class NgIfExampleComponent implements OnInit {
	a: number = 4;
	b: number = 3;
	str: string = `yes`;
	myFuncResult: boolean = true;

	constructor() {}

	ngOnInit() {}


	increaseA(): void {
		this.a++;
	}

	decreaseA(): void {
		this.a--;
	}

	increaseB(): void {
		this.b++;
	}

	decreaseB(): void {
		this.b--;
	}


	setStrYes(): void {
		this.str = `yes`;
	}

	setStrSomeValue(): void {
		this.str = `some value`;
	}


	myFunc(): boolean {
		return this.myFuncResult;
	}

	setMyFuncResultTrue(): void {
		this.myFuncResult = true;
	}

	setMyFuncResultFalse(): void {
		this.myFuncResult = false;
	}
}
