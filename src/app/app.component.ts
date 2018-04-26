import {
  Component,
  Inject
} from '@angular/core';

import { ExampleModel } from './models/example.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(
    @Inject('ExampleModels') public examples: ExampleModel[]
  ) {}
}
