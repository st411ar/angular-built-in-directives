import {
	Component,
	Input,
	OnInit
} from '@angular/core';
import {
	ActivatedRoute,
	Router
} from '@angular/router';

import { ExampleModel } from '../../models/example.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent implements OnInit {
	@Input('item') item: ExampleModel;

	constructor(
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit() {}
}
