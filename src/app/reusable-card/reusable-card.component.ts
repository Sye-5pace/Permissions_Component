import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-card',
  standalone: true,
  imports: [],
  templateUrl: './reusable-card.component.html',
})

export class ReusableCardComponent {
  @Input() cardImgUrl!: string;
  @Input() cardTitle!: string;
  @Input() cardContent!: string;
}
