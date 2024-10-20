import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Courses } from '../model/courses';
import { SchemeService } from '../services/scheme.service';

@Component({
  selector: 'app-scheme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scheme.component.html',
  styleUrl: './scheme.component.scss'
})
export class SchemeComponent implements OnInit {
  schemeCourses: Courses[] = [];
  totalPoints: number = 0; // Håller koll på poäng

  constructor(private schemeService: SchemeService) {} // Använder schemeservice

  ngOnInit() {
    this.loadSchemeCourses(); // Hämtar kurserna från ramschemat
  }

  // Laddar kurser från SchemeService
  loadSchemeCourses(): void {
    this.schemeCourses = this.schemeService.getSelectedCourses(); // Hämtar alla kurser i ramschemat
    this.totalPoints = this.schemeService.getTotalPoints(); // Hämtar total poäng
  }

  // Tar bort en kurs från ramschemat via SchemeService
  removeCourse(courseCode: string): void {
    this.schemeService.removeCourse(courseCode); // Tar bort kursen
    this.loadSchemeCourses(); // Uppdaterar listan efter borttagningen
  }
}
