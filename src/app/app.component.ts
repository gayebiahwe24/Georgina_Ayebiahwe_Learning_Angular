import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";
import {NgIf} from "@angular/common";
import {user} from "./user"; // add NgIF IMPORT

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf], //add ngif here too
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: user = {firstname:'Georgina', lastname:'Ayebiahwe', Age:'26', studentId:'1223343', Email:'true'};
  user: user = {firstname:'Georgina', lastname:'Ayebiahwe', Age:'26', studentId:'1223343', Email:'true'};
  user: user = {firstname:'Georgina', lastname:'Ayebiahwe', Age:'26', studentId:'1223343', Email:'true'};
  user: user = {firstname:'Georgina', lastname:'Ayebiahwe', Age:'26', studentId:'1223343', Email:'true'};
  user: user = {firstname:'Georgina', lastname:'Ayebiahwe', Age:'26', studentId:'1223343', Email:'true'};
  user: user = {firstname:'Georgina', lastname:'Ayebiahwe', Age:'26', studentId:'1223343', Email:'true'};

