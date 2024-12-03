import { Injectable } from '@angular/core';
import { movielist } from "../mock-movies.data";
import {catchError, Observable, of, throwError} from "rxjs";
import { movielist } from "../movie-list";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  private apiUrl = 'api/smartphones'; // URL to web API
  private movielist: movielist[] = movielist; // Local copy of smartphone data for CRUD operations

  constructor(private http: HttpClient) { }

  // Retrieve all smartphones from API
  getMovielist(): Observable<movielist[]> {
    return this.http.get<movielist[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Retrieve a smartphone by its model
  getSmartphoneByModel(model: string): Observable<movielist | undefined> {
    return this.http.get<movielist>(`${this.apiUrl}/${model}`).pipe(catchError(this.handleError));
  }

  // Add a new smartphone
  addSmartphone(newSmartphone: movielist): Observable<movielist> {
    return this.http.post<movielist>(this.apiUrl, newSmartphone).pipe(catchError(this.handleError));
  }

  // Update an existing smartphone
  updateSmartphone(updatedSmartphone: movielist): Observable<movielist> {
    const url = `${this.apiUrl}/${updatedSmartphone.model}`;
    return this.http.put<movielist>(url, updatedSmartphone).pipe(catchError(this.handleError));
  }

  // Delete a smartphone by its model
  deleteSmartphone(model: string): Observable<{}> {
    const url = `${this.apiUrl}/${model}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // Handle errors for HTTP requests
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
