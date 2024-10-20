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

  // Lägger till en kurs i ramschemat och sparar i LocalStorage
  addCourse(course: Courses): void {
    const courses = this.getSelectedCourses();
    courses.push(course); // Lägger till kursen
    localStorage.setItem(this.schemeKey, JSON.stringify(courses)); // Sparar ramschemat
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