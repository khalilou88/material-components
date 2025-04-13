import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inline-calendar', pathMatch: 'full' },
  {
    path: 'inline-calendar',
    loadComponent: () =>
      import('./inline-calendar/inline-calendar.component').then(
        (m) => m.InlineCalendarComponent
      ),
  },
];
