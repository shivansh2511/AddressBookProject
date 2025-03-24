import { Routes } from '@angular/router';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'person-list', pathMatch: 'full' },
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-form', component: PersonFormComponent }
];
