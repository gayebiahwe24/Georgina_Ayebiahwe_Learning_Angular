import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass, NgForOf} from "@angular/common";
import {MovieListItemComponent} from "./movie-list-item/movie-list-item.component";
import {MovieListComponent} from "./movie-list/movie-list.component";


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgClass,MovieListItemComponent,MovieListComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movielistItem =[
    {Title:'Squid', Director: 'Bill Finn', Year_Of_Release: 2018, Genre: "Comedy",Image:"C:\Users\W0859914\OneDrive - St. Clair College\JavaScriptFrameworks\src\SquidMovie_img.png"},
    {Title: 'Star Wars', Director: 'Bright Sawan', Year_Of_Release: 2022,  Genre: "Action",Image:"C:\Users\W0859914\OneDrive - St. Clair College\JavaScriptFrameworks\src\Star_Wars.png"},
    {Title: 'Blood & Water', Director: 'Andrews Collins', Year_Of_Release: 2018, Genre: "Mystery",Image:"C:\Users\W0859914\OneDrive - St. Clair College\JavaScriptFrameworks\src\Blood&Water.png"},
    {Title: 'Gossip Girl', Director: 'Arthur Sephia', Year_Of_Release: 1921, Genre: "Romantic",Image:"C:\Users\W0859914\OneDrive - St. Clair College\JavaScriptFrameworks\src\GossipGirl.png"},
    {Title: 'Suits', Director: 'Billy Anthony', Year_Of_Release: 2023, Genre: "Mystery",Image:"C:\Users\W0859914\OneDrive - St. Clair College\JavaScriptFrameworks\src\Suits.png"},
  ];
  selectedmovielistItem:any;


  selectmovielistItem(item:any) {
    this.selectedmovielistItem = item;
  }

}

