import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { SchemeComponent } from './scheme/scheme.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LibraryComponent } from './library/library.component';
import { StudentunionComponent } from './studentunion/studentunion.component';
import { CampusComponent } from './campus/campus.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { ApplyComponent } from './apply/apply.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'courses', component: CoursesComponent },
    { path: 'scheme', component: SchemeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'studentunion', component: StudentunionComponent },
    { path: 'campus', component: CampusComponent },
    { path: 'scholarship', component: ScholarshipComponent },
    { path: 'apply', component: ApplyComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }
];
