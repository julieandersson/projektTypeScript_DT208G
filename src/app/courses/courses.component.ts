import { Component } from '@angular/core';
import { Courses } from '../model/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  // lagrar alla kurser från interfacet, tar en tom array
  courseslist: Courses[] = [];
  // lagrar filtrerad lista baserat på användarens sökfråga
  filteredCourses: Courses[] = [];
  // variabel för söktexten från inmatning
  searchText: string = "";
  // lagrar alla ämnen i listan med kurser
  subjects: string[] = [];
  // valt ämne från användaren, tar en tom sträng
  selectedSubject: string = "";

  // konstruktor för import av kurser
  constructor(private coursesservice: CoursesService) {}

  // kör ngOnInit när applikationen startar
  ngOnInit() {
    this.coursesservice.getCourses().subscribe(data => {
      this.courseslist = data;
      this.filteredCourses = data;
    })
  }
}
