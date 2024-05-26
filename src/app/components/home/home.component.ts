import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
