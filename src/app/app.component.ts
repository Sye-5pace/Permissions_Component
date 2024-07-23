import { Component } from '@angular/core';
import { ReusableCardComponent } from "./reusable-card/reusable-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReusableCardComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'ui-2challenge';
  cardTitle = 'Help us improve your experience';
  cardImgUrl = 'ui-2challenge';
  cardContent = `In order to provide better service,
  we would like to collect your data for research purposes.
  You can decline it anytime.
  `;
}
