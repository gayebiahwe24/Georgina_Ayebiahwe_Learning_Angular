import {Component, Input} from '@angular/core';
import {NgForOf, NgClass, NgIf, NgFor} from "@angular/common";

let input = Input();

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent {

  @Input() item: any;
}
