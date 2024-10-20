import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  private schemeKey = 'ramschema' // Nyckel för Localstorage

  constructor() { }

  // Hämtar alla kurser som finns sparade i ramschemat (LocalStorage)
  getSelectedCourses(): Courses[] {
    return JSON.parse(localStorage.getItem(this.schemeKey) || '[]');
  }

  // Kontroll om kursen redan är tillagd i ramschemat
  isCourseAdded(courseCode: string): boolean {
    const courses = this.getSelectedCourses();
    return courses.some(course => course.courseCode === courseCode);
  }

  // Lägger till en kurs i ramschemat och sparar i LocalStorage
  addCourse(course: Courses): void {
    const courses = this.getSelectedCourses();

    // Kontrollerar om kursen redan finns i ramschemat
    if (!this.isCourseAdded(course.courseCode)) {
      courses.push(course); // Lägger till kursen
      localStorage.setItem(this.schemeKey, JSON.stringify(courses)); // Sparar ramschemat
    } else {
      console.error('Kursen är redan tillagd i ramschemat.');
    }
  }

  // Tar bort en kurs från ramschemat och uppd LocalStorage
  removeCourse(courseCode: string): void {
    let courses = this.getSelectedCourses();
    courses = courses.filter(course => course.courseCode !== courseCode);
    localStorage.setItem(this.schemeKey, JSON.stringify(courses)); // Uppdaterar ramschemat
  }

  // Hämtar den totala poängen för kurser i ramschemat
  getTotalPoints(): number {
    const courses = this.getSelectedCourses();
    return courses.reduce((total, course) => total + course.points, 0); // Summerar poängen
  }

}
