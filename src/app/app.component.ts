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
  user1: user = {firstname:'Georgina', lastname:'Ayebiahwe', age:'26', studentId:'1223343', isAdmin:'true'};
  user2: user = {firstname:'Georgina', lastname:'Ayebiahwe', age:'26', studentId:'1223343', Email:'true'};
  user3: user = {firstname:'Georgina', lastname:'Ayebiahwe', age:'26', studentId:'1223343', Email:'true'};
  user4: user = {firstname:'Georgina', lastname:'Ayebiahwe', age:'26', studentId:'1223343', Email:'true'};
  user5: user = {firstname:'Georgina', lastname:'Ayebiahwe', Age:'26', studentId:'1223343', Email:'true'};
  user6: user = {firstname:'Georgina', lastname:'Ayebiahwe', Age:'26', studentId:'1223343', Email:'true'};

