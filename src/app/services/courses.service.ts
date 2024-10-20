import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../model/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // private url (egenskap), typen string
  private url: string = "https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json";

  constructor(private http: HttpClient) { } // Läser in HttpClient

  getCourses(): Observable<Courses[]> { // Hämtar kurser genomm att ta emot en array av kurser enligt interfacet

    return this.http.get<Courses[]>(this.url); // Returnerar data från url från getCourses
  }
}
