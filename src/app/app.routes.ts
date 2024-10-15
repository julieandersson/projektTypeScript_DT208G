import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { SchemeComponent } from './scheme/scheme.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'courses', component: CoursesComponent },
    { path: 'scheme', component: SchemeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }

];
