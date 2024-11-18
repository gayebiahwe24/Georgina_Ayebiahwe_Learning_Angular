import { InMemoryDbService } from "angular-in-memory-web-api";
import {movielist} from "../mock-movies";
import {movie} from "../movie-list/movie";

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {movielist:movie[]}{
    const movielist: movie[] = [
      {Title:'Squid', Director: 'Bill Finn', Year_Of_Release: 2018, Genre: true, Image:'./src/Image/Blood&Water.png'},
      {Title: 'Star Wars', Director: 'Bright Sawan', Year_Of_Release: 2022,  Genre: true,Image:'./src/Image/GossipGirl.png'},
      {Title: 'Blood & Water', Director: 'Andrews Collins', Year_Of_Release: 2018, Genre:true,Image: './src/Image/SquidMovie_img.png'},
      {Title: 'Gossip Girl', Director: 'Arthur Sephia', Year_Of_Release: 1921, Genre:true,Image: './src/Image/Star_Wars.png'},
      {Title: 'Suits', Director: 'Billy Anthony', Year_Of_Release: 2023, Genre: true,Image:'./src/Image/Suits.png'},
    ];
    return { movielist };
  }
}
