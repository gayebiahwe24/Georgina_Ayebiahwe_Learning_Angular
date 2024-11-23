import { Component, OnInit  } from '@angular/core';
import {movielist} from "../mock-movies";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieListService } from '../services/movielist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-modify-movie-list',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-movie-list.component.html',
  styleUrl: './modify-movie-list.component.css'
})
export class ModifyMovieListComponent implements OnInit {
  movielistForm: FormGroup;
  isEditMode: boolean = false;
  error: string | null = null;
  constructor(
    private fb: FormBuilder,
    private movielistService: MovieListService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialize the form with FormBuilder
    this.movielistForm = this.fb.group({
      Title: ['', Validators.required],
      Director: ['', Validators.required],
      Year_Of_Release: [0, [Validators.required, Validators.min(0)]],
      Genre: [false] // Default to false
    });
  }

  ngOnInit(): void {
    const model = this.route.snapshot.paramMap.get('model');
    if (model) {
      this.isEditMode = true;
      this.movielistService.getSmartphoneByModel(model).pipe(
        catchError(err => {
          this.error = 'Error fetching smartphone';
          console.error('Error fetching smartphone:', err);
          return of(null);
        })
      ).subscribe(movielist => {
        if (movielist) {
          this.movielistForm.patchValue(movielist);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.movielistForm.valid) {
      const movielistData: movielist = this.movielistForm.value;
      if (this.isEditMode) {
        this.movielistService.updateSmartphone(movielistData).subscribe(() => {
          console.log('Smartphone updated successfully');
          this.navigateToSmartphoneList();
        });
      } else {
        this.movielistService.addSmartphone(movielistData).subscribe(() => {
          console.log('Smartphone added successfully');
          this.navigateToSmartphoneList();
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  onDelete(): void {
    const model = this.movielistForm.value.model;
    if (model) {
      this.movielistService.deleteSmartphone(model).subscribe(() => {
        console.log('Smartphone deleted successfully');
        this.navigateToSmartphoneList();
      });
    }
  }

  navigateToSmartphoneList(): void {
    this.router.navigate(['/smartphones']);
  }
}
