import {
	Component,
	Input,
	OnInit
} from '@angular/core';

import { ExampleModel } from '../../models/example.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent implements OnInit {
	@Input('item') item: ExampleModel;

	constructor() {}

	ngOnInit() {}
}
