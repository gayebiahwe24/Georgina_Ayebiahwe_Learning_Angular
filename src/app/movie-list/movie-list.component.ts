import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass, NgForOf} from "@angular/common";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgClass,MovieListItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movielistItem =[
    {Title:'Squid', Director: 'Bill Finn', Year_Of_Release: 2018, Genre: "Comedy"},
    {Title: 'Star Wars', Director: 'Bright Sawan', Year_Of_Release: 2022,  Genre: "Action"},
    {Title: 'Blood & Water', Director: 'Andrews Collins', Year_Of_Release: 2018, Genre: "Mystery"},
    {Title: 'Gossip Girl', Director: 'Arthur Sephia', Year_Of_Release: 1921, Genre: "Romantic"},
    {Title: 'Suits', Director: 'Billy Anthony', Year_Of_Release: 2023, Genre: "Mystery"},
];
  selectedmovielistItem:any;

  selectmovielistItem(item:any) {
    this.selectedmovielistItem = item;
  }

}
