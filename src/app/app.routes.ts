import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { SchemeComponent } from './scheme/scheme.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'courses', component: CoursesComponent },
    { path: 'scheme', component: SchemeComponent }
];
