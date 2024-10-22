import { Component } from '@angular/core';
import { Courses } from '../model/courses';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // Importerar ngxpaginationmodule för paginering
import { SchemeService } from '../services/scheme.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
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
  // Sorteringsordning
  isAscending: boolean = true;
  // Lagrar kurser som redan har lagts till i ramschemat
  addedCourses: Map<string, boolean> = new Map<string, boolean>();

  // Variabler för paginering
  currentPage: number = 1; // Nuvarande sida
  itemsPerPage: number = 20; // Antal kurser per sida
  totalItems: number = 0; // Totalt antal kurser

  // Variabel för felmeddelande vid rensa filter-knapp
  errorMessage: string = '';

  // konstruktor för import av kurser
  constructor(private coursesservice: CoursesService, private schemeService: SchemeService)  {}

  // kör ngOnInit när applikationen startar
  ngOnInit() {
    this.coursesservice.getCourses().subscribe((courses) => {
      // sparar kurserna och filtrera dem
      this.courseslist = courses;
      this.filteredCourses = courses;
      this.totalItems = this.filteredCourses.length; // Uppdaterar totalt antal kurser
      // hämtar unika ämnen
      this.subjects = [...new Set(courses.map(courses => courses.subject))];
    });
  }

  // Filtreringsmetod för att uppdatera kurslistan baserat på söktext och ämne
  filterCourses(): void {
    this.filteredCourses = this.courseslist.filter(course => {
      // Kontroll om kursnamn eller kurskod matchar söktexten
      const matchesSearchText = course.courseName.toLowerCase().includes(this.searchText.toLowerCase()) ||
                                course.courseCode.toLowerCase().includes(this.searchText.toLowerCase());
      // Kontroll om kursens ämne matchar det valda ämnet (eller om inget ämne är valt)                         
      const matchesSubject = this.selectedSubject ? course.subject === this.selectedSubject : true;
      // Returnerar true om både sökfält och ämne matchar (eller om inga filter är satta)
      return matchesSearchText && matchesSubject;
    });
    this.totalItems = this.filteredCourses.length; // Uppdaterar totalt antal kurser efter filtrering
    this.currentPage = 1; // Återställer till första sidan efter filtrering
  }

    // Sidbyte
    onPageChange(page: number): void {
      this.currentPage = page; // Uppdaterar aktuell sida när användaren bläddrar
    }

  // lägger till en kurs i ramschemat via SchemeService
  addToScheme(course: Courses): void {
    if (this.schemeService.isCourseAdded(course.courseCode)) {
      // Visar meddelande om kursen redan finns i ramschemat
      alert('Denna kurs är redan tillagd i ditt ramschema.');
    } else {
    this.schemeService.addCourse(course); // Lägger till kursen i ramschemat om den inte redan finns
    this.addedCourses.set(course.courseCode, true); // Markerar kursen som tillagd
  }
}

  // Rensar alla filter eller visar felmeddelande om inga filter är valda
  clearFilters(): void {
    if (!this.searchText && !this.selectedSubject) {
      // Om inga filter är valda, visa felmeddelande till användaren
      this.errorMessage = 'Inga filter är aktiva att rensa.';
    } else {
      // Om filter är valda, återställ filtren
      this.searchText = ''; // Tömmer söktexten
      this.selectedSubject = '';  // Återställer valt ämne
      this.filterCourses(); // Anropar filterCourses för att visa hela listan igen
      this.errorMessage = ''; // Rensa felmeddelandet efter rensning
    }
  }

  // Sorteringsmetod för kurskod
  sortCoursesByCode(): void {
    this.filteredCourses.sort((a, b) => {
      // Sorterar i stigande eller fallande ordning 
      return this.isAscending ? a.courseCode.localeCompare(b.courseCode) : b.courseCode.localeCompare(a.courseCode);
    });
    // Växlar sorteringsordningen för nästa gång användaren klickar
    this.isAscending = !this.isAscending;
  }

  // Sorteringsmetod för kursnamn
  sortCoursesByName(): void {
    this.filteredCourses.sort((a, b) => {
      // Sorterar i stigande eller fallande ordning 
      return this.isAscending ? a.courseName.localeCompare(b.courseName) : b.courseName.localeCompare(a.courseName);
    });
    // Växlar sorteringsordningen för nästa gång användaren klickar
    this.isAscending = !this.isAscending;
  }

  // Sorteringsmetod för poäng
  sortCoursesByPoints(): void {
    this.filteredCourses.sort((a, b) => {
      // Sorterar kursens poäng (nummer) i stigande eller fallande ordning 
      return this.isAscending ? a.points - b.points : b.points - a.points;
    });
    // Växlar sorteringsordningen för nästa gång användaren klickar
    this.isAscending = !this.isAscending;
  }

  // Sorteringsmetod för ämne
  sortCoursesBySubject(): void {
    this.filteredCourses.sort((a, b) => {
      // Sorterar i stigande eller fallande ordning 
      return this.isAscending ? a.subject.localeCompare(b.subject) : b.subject.localeCompare(a.subject);
    });
    // Växlar sorteringsordningen för nästa gång användaren klickar
    this.isAscending = !this.isAscending;
  }
  
}
